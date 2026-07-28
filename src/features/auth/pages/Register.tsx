import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart, Store, Info } from "lucide-react";

import {
  registerSchema,
  type RegisterFormData,
  type AuthRole,
  type RegisterProps,
} from "../types/auth.types";
import { Link } from "react-router-dom";

const INDUSTRIES = [
  "Electronics",
  "Agriculture",
  "Construction",
  "Fashion",
  "Furniture",
  "Food & Beverage",
] as const;

const ROLE_COPY: Record<
  AuthRole,
  { companyLabel: string; industryLabel: string; companyPlaceholder: string }
> = {
  buyer: {
    companyLabel: "Company Name",
    industryLabel: "Industry of Interest",
    companyPlaceholder: "Acme Trading Co.",
  },
  seller: {
    companyLabel: "Company / Factory Name",
    industryLabel: "Industry Sector",
    companyPlaceholder: "Acme Manufacturing Ltd.",
  },
};

export default function Register({
  initialRole = "buyer",
  onSubmit,
}: RegisterProps) {
  const [role, setRole] = useState<AuthRole>(initialRole);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: initialRole,
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      industry: INDUSTRIES[0],
      password: "",
      agreedToTerms: undefined,
    },
  });

  const copy = ROLE_COPY[role];

  const handleRoleChange = (newRole: AuthRole) => {
    setRole(newRole);
    setValue("role", newRole, { shouldValidate: true });
  };

  const onValid = (data: RegisterFormData) => {
    onSubmit?.(data);
    console.log("Form submitted:", data);
  };

  return (
    <div id="view-register" className="pt-[20px] min-h-screen ledger-bg">
      <div className="max-w-lg mx-auto px-5 py-16 sm:py-20">
        <div className="text-center mb-8 reveal in">
          <span className="tag-stamp text-xs font-semibold text-amber-700">
            ONBOARDING / NEW MANIFEST
          </span>
          <h1 className="font-display text-3xl font-bold text-ink-900 mt-3">
            Create your account
          </h1>
          <p className="text-[#5E6775] mt-2 text-sm">
            Join as a customer to source products, or a supplier to list them.
          </p>
        </div>

        <div
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-7 sm:p-8 reveal in"
          style={{ transitionDelay: ".05s" }}
        >
          <div className="grid grid-cols-2 gap-2 bg-[#F2EFE8] rounded-lg p-1 mb-7">
            <button
              type="button"
              id="role-buyer"
              onClick={() => handleRoleChange("buyer")}
              aria-pressed={role === "buyer"}
              className={`role-toggle-btn py-2.5  rounded-md text-sm font-semibold transition-all duration-200 inline-flex items-center justify-center gap-1.5 ${
                role === "buyer" ? "bg-[#1B2A3D] text-[#F5F6F8]" : ""
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5" /> I'm a Customer
            </button>
            <button
              type="button"
              id="role-seller"
              onClick={() => handleRoleChange("seller")}
              aria-pressed={role === "seller"}
              className={`role-toggle-btn py-2.5  rounded-md text-sm font-semibold transition-all duration-200 inline-flex items-center justify-center gap-1.5 ${
                role === "seller" ? "bg-[#1B2A3D] text-[#F5F6F8]" : ""
              }`}
            >
              <Store className="w-3.5 h-3.5" /> I'm a Supplier
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onValid)}
            noValidate
            className="space-y-4"
          >
            <input type="hidden" {...register("role")} />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jordan Lee"
                  aria-invalid={!!errors.fullName}
                  className={`input-focus w-full px-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                    errors.fullName
                      ? "border-red-400 bg-red-50"
                      : "border-ink-200"
                  }`}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
                >
                  {copy.companyLabel}
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder={copy.companyPlaceholder}
                  aria-invalid={!!errors.companyName}
                  className={`input-focus w-full px-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                    errors.companyName
                      ? "border-red-400 bg-red-50"
                      : "border-ink-200"
                  }`}
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
                className={`input-focus w-full px-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                  errors.email ? "border-red-400 bg-red-50" : "border-ink-200"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  aria-invalid={!!errors.phone}
                  className={`input-focus w-full px-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                    errors.phone ? "border-red-400 bg-red-50" : "border-ink-200"
                  }`}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
                >
                  {copy.industryLabel}
                </label>
                <select
                  id="industry"
                  aria-invalid={!!errors.industry}
                  className={`input-focus w-full px-4 py-3 rounded-lg border text-sm text-ink-700 bg-white ${
                    errors.industry
                      ? "border-red-400 bg-red-50"
                      : "border-ink-200"
                  }`}
                  {...register("industry")}
                >
                  {INDUSTRIES.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.industry.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                aria-invalid={!!errors.password}
                className={`input-focus  w-full px-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                  errors.password
                    ? "border-red-400 bg-red-50"
                    : "border-ink-200"
                }`}
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {role === "seller" && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-700 flex items-start gap-2.5">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>
                  Supplier accounts go through a quick verification step
                  (business documents + sample review) before listings go live.
                  You can fill these in from your dashboard after signing up.
                </span>
              </div>
            )}

            <div>
              <label className="flex items-start gap-2.5 text-sm text-ink-500">
                <input
                  id="agreedToTerms"
                  type="checkbox"
                  aria-invalid={!!errors.agreedToTerms}
                  className="mt-0.5 rounded border-ink-300 text-amber-600 focus:ring-amber-500"
                  {...register("agreedToTerms")}
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-amber-600 hover:text-amber-700"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-amber-600 hover:text-amber-700"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.agreedToTerms.message}
                </p>
              )}
            </div>

            <button
              id="btn-create-account"
              type="submit"
              disabled={isSubmitting}
              className="btn-amber w-full py-3 rounded-lg text-sm font-semibold text-white bg-[#D97B3F] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>
          </form>
        </div>
        <p
          className="text-center text-sm text-ink-500 mt-7 reveal in"
          style={{ transitionDelay: ".1s" }}
        >
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-amber-600 hover:text-amber-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

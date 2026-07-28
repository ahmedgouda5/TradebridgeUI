import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShoppingCart, Store, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

// ── Schema ────────────────────────────────────────────────────────────────────
const loginSchema = z.object({
  role: z.enum(["buyer", "seller", "admin"]),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  keepSignedIn: z.boolean(),
});

export type SignInRole = "buyer" | "seller";
export type SignInFormData = z.infer<typeof loginSchema>;

interface SignInProps {
  onSubmit?: (data: SignInFormData) => void;
  onForgotPasswordClick?: () => void;
  onRegisterClick?: () => void;
  onGoogleSignIn?: () => void;
  onMicrosoftSignIn?: () => void;
}

// ── Role options ──────────────────────────────────────────────────────────────
const ROLE_OPTIONS: {
  key: SignInRole;
  label: string;
  icon: typeof ShoppingCart;
}[] = [
  { key: "buyer", label: "Customer", icon: ShoppingCart },
  { key: "seller", label: "Supplier", icon: Store },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function SignIn({
  onSubmit,
  onForgotPasswordClick,
  onGoogleSignIn,
  onMicrosoftSignIn,
}: SignInProps) {
  const [role, setRole] = useState<SignInRole>("buyer");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: "buyer",
      email: "",
      password: "",
      keepSignedIn: false,
    },
  });

  const handleRoleChange = (newRole: SignInRole) => {
    setRole(newRole);
    setValue("role", newRole, { shouldValidate: true });
  };

  const onValid = (data: SignInFormData) => {
    onSubmit?.(data);
    console.log("Login submitted:", data);
  };

  return (
    <div id="view-signin" className="pt-[20px] min-h-screen ledger-bg">
      <div className="max-w-md mx-auto px-5 py-16 sm:py-20">
        {/* ── Header ── */}
        <div className="text-center mb-8 reveal in">
          <span className="tag-stamp text-xs font-semibold text-amber-700">
            ACCESS / MANIFEST LOGIN
          </span>
          <h1 className="font-display text-3xl font-bold text-ink-900 mt-3">
            Welcome back
          </h1>
          <p className="text-[#5E6775] mt-2 text-sm">
            Sign in to manage your requests, orders, and listings.
          </p>
        </div>

        <div
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-7 sm:p-8 reveal in"
          style={{ transitionDelay: ".05s" }}
        >
          {/* Role toggle */}
          <div className="grid grid-cols-2 gap-2 bg-[#F2EFE8] rounded-lg p-1 mb-7">
            {ROLE_OPTIONS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                id={`role-${key}`}
                onClick={() => handleRoleChange(key)}
                aria-pressed={role === key}
                className={`role-toggle-btn py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 inline-flex items-center justify-center gap-1.5 ${
                  role === key ? "bg-[#1B2A3D] text-[#F5F6F8]" : ""
                }`}
              >
                <Icon className="w-3.5 h-3.5" /> {label}
              </button>
            ))}
          </div>

          <input type="hidden" {...register("role")} />

          <form
            onSubmit={handleSubmit(onValid)}
            noValidate
            className="space-y-4"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-ink-600 mb-1.5 uppercase tracking-wide"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  className={`input-focus w-full pl-10 pr-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                    errors.email ? "border-red-400 bg-red-50" : "border-ink-200"
                  }`}
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-ink-600 uppercase tracking-wide"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={onForgotPasswordClick}
                  className="text-xs font-medium text-amber-600 hover:text-amber-700"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300 pointer-events-none" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  className={`input-focus w-full pl-10 pr-4 py-3 rounded-lg border text-sm placeholder:text-ink-300 ${
                    errors.password
                      ? "border-red-400 bg-red-50"
                      : "border-ink-200"
                  }`}
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Keep signed in */}
            <label className="flex items-center gap-2.5 text-sm text-ink-500">
              <input
                id="keepSignedIn"
                type="checkbox"
                className="mt-0.5 rounded border-ink-300 text-amber-600 focus:ring-amber-500"
                {...register("keepSignedIn")}
              />
              Keep me signed in
            </label>

            {/* Submit */}
            <button
              id="btn-sign-in"
              type="submit"
              disabled={isSubmitting}
              className="btn-amber w-full py-3 rounded-lg text-sm font-semibold text-white bg-[#D97B3F] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing in…" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-ink-400 font-mono">
              OR CONTINUE WITH
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-ink-700 hover:border-[#0F1B2E] transition-colors duration-200"
            >
              <GoogleIcon /> Google
            </button>
            <button
              type="button"
              onClick={onMicrosoftSignIn}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-ink-700 hover:border-[#0F1B2E] transition-colors duration-200"
            >
              <MicrosoftIcon /> Microsoft
            </button>
          </div>
        </div>

        {/* Footer link */}
        <p
          className="text-center text-sm text-ink-500 mt-7 reveal in"
          style={{ transitionDelay: ".1s" }}
        >
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-amber-600 hover:text-amber-700"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}

// ── Brand icons (inline SVG — no extra package needed) ────────────────────────
function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#D97B3F"
        d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.6-2.6C16.9 2.9 14.7 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c6.9 0 9.5-4.9 9.5-7.4 0-.5-.05-.9-.12-1.3H12z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <rect x="2" y="2" width="9" height="9" fill="#D97B3F" />
      <rect x="13" y="2" width="9" height="9" fill="#D97B3F" opacity="0.7" />
      <rect x="2" y="13" width="9" height="9" fill="#D97B3F" opacity="0.7" />
      <rect x="13" y="13" width="9" height="9" fill="#D97B3F" opacity="0.5" />
    </svg>
  );
}

"use client";
import { authClient, signInWithGoogle } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const inputCls =
  "w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 outline-none transition placeholder:text-mist/70 focus:border-orbit";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (formData) => {
    const { data, error } = await authClient.signIn.email({
      ...formData,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Logged in successfully.");
      router.push("/");
      router.refresh();
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="relative isolate grid min-h-[calc(100vh-4.5rem)] place-items-center overflow-hidden px-5 py-12">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-1/3 -z-10 size-96 -translate-x-1/2 rounded-full bg-orbit/25 blur-3xl" />

      <div className="glass w-full max-w-md rounded-[2rem] p-8 sm:p-10">
        <h1 className="text-center text-3xl font-bold">Welcome back</h1>
        <p className="mt-2 text-center text-mist">
          Log in to continue learning.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className={inputCls}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-coral">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={inputCls}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="mt-1.5 text-sm text-coral">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="h-12 w-full cursor-pointer rounded-xl bg-orbit font-semibold text-white shadow-[0_0_30px_rgba(123,92,255,0.45)] transition hover:bg-orbit-soft"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center gap-4 text-xs text-mist">
          <span className="h-px flex-1 bg-white/10" /> or{" "}
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <button
          type="button"
          onClick={signInWithGoogle}
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/20 font-medium transition hover:bg-white/5"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-mist">
          New to SkillSphere?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-orbit-soft hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
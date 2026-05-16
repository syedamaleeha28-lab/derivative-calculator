export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61590109041520";

type FacebookSocialLinkProps = {
  className?: string;
  iconSize?: number;
  "aria-label"?: string;
};

/** Facebook brand mark (lucide-compatible sizing via currentColor). */
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function FacebookSocialLink({
  className,
  iconSize = 18,
  "aria-label": ariaLabel = "Facebook",
}: FacebookSocialLinkProps) {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300",
        "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 hover:scale-105 active:scale-95",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <FacebookIcon size={iconSize} />
    </a>
  );
}

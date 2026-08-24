import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="py-8 text-center">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}

import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}

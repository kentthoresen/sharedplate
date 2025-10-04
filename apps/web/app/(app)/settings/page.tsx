import { authGuard } from '@/lib/auth-guard';

/**
 * Settings page placeholder highlights privacy toggles to be implemented.
 */
export default async function SettingsPage() {
  const session = await authGuard();
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-brand-slate">Settings</h1>
      <p className="text-sm text-slate-600">
        Hi {session.user?.name ?? 'friend'}, future settings for telemetry opt-in and donation visibility will live here.
      </p>
    </section>
  );
}

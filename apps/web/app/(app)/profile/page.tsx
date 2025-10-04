import { Avatar } from '@/components/avatar';
import { authGuard } from '@/lib/auth-guard';

/**
 * Profile page surfaces session info. In future iterations we will fetch
 * extended profile data from the API.
 */
export default async function ProfilePage() {
  const session = await authGuard();
  return (
    <div className="flex items-center gap-4">
      <Avatar name={session.user?.name ?? 'Cook'} imageUrl={session.user?.image ?? undefined} />
      <div>
        <h1 className="text-2xl font-semibold text-brand-slate">{session.user?.name ?? 'Anonymous Cook'}</h1>
        <p className="text-sm text-slate-600">{session.user?.email}</p>
      </div>
    </div>
  );
}

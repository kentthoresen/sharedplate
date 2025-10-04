import Image from 'next/image';

/**
 * Avatar component handles fallback initials when no image is available.
 */
export function Avatar({ name, imageUrl }: { name: string; imageUrl?: string | null }) {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={name}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/20 text-sm font-semibold text-brand-teal">
      {initials}
    </span>
  );
}

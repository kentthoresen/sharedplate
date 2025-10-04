import { JSONWebKeySet } from 'jose';

/**
 * Placeholder JWKS generator. In production we will surface the signing keys
 * managed by NextAuth. During scaffolding we return an empty set, which is
 * acceptable because the Rust API refuses to validate tokens until keys exist.
 */
export async function getJwkSet(): Promise<JSONWebKeySet> {
  return { keys: [] };
}

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

/**
 * Получает авторизованного пользователя из базы данных.
 * @returns {Promise<Object>} - Объект пользователя
 * @throws {Error} - Если пользователь не найден или не авторизован
 */
export async function getAuthenticatedUser() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found in database");
  }

  return user;
}

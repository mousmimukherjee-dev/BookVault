import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('token')
      : null;

 
  console.log('AUTH GUARD RUNNING. Token exists:', !!token);

  if (token) {
    return true;
  }

  return router.createUrlTree(['/']);
};


export const authenticationGuard = (async () => {
  let shouldNavigate = true;
  if (!localStorage.getItem('token')) {
        shouldNavigate=false;
  }
  return shouldNavigate;
})
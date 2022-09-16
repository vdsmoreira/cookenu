export const goToLoginPage = (navigator) => {
  navigator('/login');
}

export const goToSignupPage = (navigator) => {
  navigator('/signup');
}

export const goToFeedPage = (navigator) => {
  navigator('/feed');
}

export const goToAddRecipePage = (navigator) => {
  navigator('/add-recipe');
}

export const goToRecipeDetailPage = (navigator, id) => {
  navigator(`/recipe/${id}`);
}
function generatePass(
  length,
  includeSpecType,
  includeUpperCase,
  includeintegType
) {
  const specType = "!@#$%^&*()_+{};~?,./";
  const integType = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let allChars = lowerCase;

  
  if (includeSpecType) allChars += specType;
  if (includeUpperCase) allChars += upperCase;
  if (includeintegType) allChars += integType;

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}

document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const includeUpperCase = document.getElementById("upperCase").checked;
  const includeSpecType = document.getElementById("specType").checked;
  const includeintegType = document.getElementById("integType").checked;

  const password = generatePass(
    length,
    includeSpecType,
    includeUpperCase,
    includeintegType
  );
  document.getElementById("password").value = password;
});

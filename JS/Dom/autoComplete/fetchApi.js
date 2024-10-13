export async function getCountries(keyword) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${keyword}`
    );
    return await response.json();
  } catch (error) {
    throw error;
  }
}

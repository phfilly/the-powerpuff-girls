export const api = async (url) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${url}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
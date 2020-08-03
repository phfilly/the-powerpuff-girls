export const fetchMedia = async (id) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/shows/${id}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
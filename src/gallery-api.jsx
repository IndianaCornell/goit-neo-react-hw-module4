import axios from "axios";

const KEY = "pH0EdzlC1PzZDB-6R3RYkmCvYzx36ypKS6j6yQoHHkU";

async function searchImages(search, page) {
  const searchParams = new URLSearchParams({
    client_id: "pH0EdzlC1PzZDB-6R3RYkmCvYzx36ypKS6j6yQoHHkU",
    query: search,
    page: page,
    per_page: 9,
  });

  const response = await axios.get(
    `https://api.unsplash.com/search/photos?${searchParams}`
  );
  return response.data;
}

export default searchImages;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Loading = () => {
  const [userData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error occurred while fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="ml-96">
      {loading ? (
        <div className="spinner">
          {/* Here we can keep any loading stuffs*/}
          Loading...
        </div>
      ) : (
        userData.map((data) => (
          <div key={data.id}>
            {`${data.id})`}
            {`${data.title}`}
            <img src={data.url} alt={data.title} className="h-20" />
          </div>
        ))
      )}
    </div>
  );
};

export default Loading;


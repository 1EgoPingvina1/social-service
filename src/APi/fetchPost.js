export async function fetchPost (data, url) {
    try {
        const response = await fetch(url, {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();

        console.log("Успех:", JSON.stringify(json));
  
        localStorage.setItem('logged', 'true')
        return json;
    } catch (error) {
        console.error("Ошибка:", error);
    }
}
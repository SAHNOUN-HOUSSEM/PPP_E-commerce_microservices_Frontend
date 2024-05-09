// const categories = [
//   {
//     id: 1,
//     name: "Electronics",
//     description: "Best electronics in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 2,
//     name: "Clothing",
//     description: "Best clothing in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 3,
//     name: "Shoes",
//     description: "Best shoes in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 4,
//     name: "Furniture",
//     description: "Best furniture in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 5,
//     name: "Books",
//     description: "Best books in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 6,
//     name: "Toys",
//     description: "Best toys in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 7,
//     name: "Sport",
//     description: "Best sport in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 8,
//     name: "Health",
//     description: "Best health in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 9,
//     name: "Beauty",
//     description: "Best beauty in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 10,
//     name: "Jewelry",
//     description: "Best jewelry in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 11,
//     name: "Garden",
//     description: "Best garden in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 12,
//     name: "Tools",
//     description: "Best tools in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
//   {
//     id: 13,
//     name: "Automotive",
//     description: "Best automotive in the world",
//     image:
//       "https://media.licdn.com/dms/image/C4E12AQEieaIUggtGDA/article-inline_image-shrink_1000_1488/0/1646959275746?e=1720656000&v=beta&t=5VYI1J5pJ3-3xbbVNhFLxUtS_2lyS6gnCVxWD76GF1g",
//   },
// ];

import axios from "axios";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8083/category").then((data) => {
      setCategories(data.data);
      // console.log(data.data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100 w-4/5 mx-auto py-12">
      <div
        className="bg-white p-6 rounded-lg shadow-lg
        overflow-hidden 
      "
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {/* {categories.length === 0 && (
            <div className="text-center col-span-full">
              <p className="text-gray-600">Loading...</p>
            </div>
          )} */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcBAgj/xAA9EAACAQIFAgQDBgQGAgIDAAABAgMEEQAFEiExQVEGEyJhcYGRBxQyQqGxFSPB8DNSYtHh8SRyFoJEU7L/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMhEAAgEDAwIFAQYHAQAAAAAAAAECAxEhBBIxBUETIjJRYZEUQnGBocEGIzNSgtHwJP/aAAwDAQACEQMRAD8AzPIc3q8odkCCWkkIEtNICY3Pew3DDuN8HX8Bg8UQmuybUapBqaOT8Tf6Je7dVk/MBZrHchhoGLsIyYfQGFtNyDtcfqNv++ZZnWYZHmCzZZM8bIfSWOzIOjA9D+n64EpuSt2Ovg9VlLpfVNEVdGsRpFySbaSO+9umNTyqli8EZTDToI2z2vQSVNSRb7uhvpUbG3FhewuCewxXUdLSeMc1ynPqeFY5zVxjMIQNmswHmfG4APxBxJ8UTPPn1e5dlYzspZSbxhbKN19S8DcAg/O+KzTpoEpqSuivId6ySsYSyOEALudTyN+UFT6Wtc8H22x4EGqIR1BXXLeSaQXKhRzsfUl9z1Gy8YnQQoYjSOqohBkltbdh2I9O1wPym/HfEeur4qKlLVLkNMwUCO944wdtzZgNuONtuScLJs5HpJWnCu8KXNpbFyeNo1WQbHpsfY72vhswQVkckMyK7BmDEjS42PmMDazXBsD1B6E4H6pZZqtzIzMHm9RUFUuVJ42IAA598OZemqtMkUpaNUBjp7gBwFHB4PXrfe+LWJ4OZn4XYSmWikMcxO+gGNo9wSLfmCp0HJJ9sVFLmuY5VMEr/MlphJqLD8cbWB325AIuPfBdBXhxDSzx6og+4ZiWRtRaxN7gEgb3O1tthh7OaCnnRjNGsrqLlZrKzi+4D9QzADfou3IwWnXxtllFdyeGeYJFrn+8Uojk1KCpB3PPP1Aw+xMgdoXTzX9IR0sLC+xFz772tt7jAjTznwxmPlyzMlJI/lyLKNLpJyzLYWK7gG30wVGoT1RIzROz61GpjtxbUOe/b98B1FHZacOH+gKotuESoJHnsxaO7oE0G2x78fMDpjkOX1U4aKnh88puLJqYb2v36HriDqli1QekxkBklY6jwPT3AO47YKfs98U5esdXSVU8dNWJLfTMQrOlhpsTzbf64DRpb5ZZWFNy7gzmc0ivGSJvORfLZW2sPnzax6cYHMyKh0WSX1LsLoODv03/AGwb+Nq6izTMpJ6OVjEyKhdW9D2/E3PFtr/6fhgPzbKKqk8upnpqiOJxqMskZVXPbcbX7cYLGG2VkQsPJQU1ZJSZjDK80rlmYagAb3BB3vgopp5anw/QVVPlFNmbQXpCrkavLW+gb34FxbnAvLFIIfvRgsiFoYy1rFxuf0N/njuVZvXQMFgmJdreZ52uYN7lACARyDbb2xoU3ZDijdZD6mkKJDIPDgy5fJmWoZfSD/Kb0t3XVbc9eMZ54emePMkrZI3mjpgGa4AIuedzbp3vcA9LYMKrNM1p8pq8wFSK6gMRBp6yOO8LNsQyldTK29iLbc7g4G/v+XVopRTZZFl80R8yV4i7opNrNpsbWv2Nt/meWWmVUeQtqJ3jmM1Dmr09ZW+t6abTrDeo39TekG3G9jxztfxVuYUuTTmtpJhWadE1VI63ZiDa5F7gXtYhRvgQy+iMucJLHHFO0QBk8pysyAC+oBxaVbc353vbBTO9RQ5BBLShdcziTQsWjUramKk82t+g3x1SbUWVkgIqqfy5NcMiguCrKosUNufhfbrcYciVnaOWoQDX+KwseeSedh3/AO7CtMc7MadYopoyWaO/pZSOSO+w6W3wxljus00hPqVACu5VTtwN9wTjIU7oBuuV7UEtDLMZ2LhrW3HUAjhe374WL3LsoznNRempnZTu7nYGwtsxO3A2wsEW99i2SnpqItlolYK26roiYBwBfbup/vfoxmuVvPf0M0rJcnjcD1b/AB57nvgwl8MVtJHJJm1ZluXzvYo1XVRxk26EdbEY903hrNKmmapy+SkzKlIt5lJUiUE76h9T3+WKbaiyg2QY+zTxGuQZxDFUEGjlfTLqsPLfcBh+x7j4YOvFdDHDn1RVOCKZtNVEX9SliOhHqHqG43BA3BvjL8/yh6GtkikppI+GeJgwsNwL3Htg58N5xF4moKfKKmV1zGkV0pZFbS0qaQbAnbVsR9L8nBrOeO502lG5xEQQ6WZo3qCWaU6T/L6m9irXtezWOw33til8Qo1VVqymRFkAQoQV0Dopve29uD3OLdGVzIkmpJagaiCoRhEDsNJ2N+Oh4vsRiPHRyZlXRQFlMbsPMWK6eSSCQNDXIsovvsNvgQyW1XfY5JsqHiCRoqFnqCAQNN1DX6fIkWBtxh6JzAth/iBiqCRLBhe/NgDtff2+eNbyfIsolphEaGJgtgrNcsP/ALc4B/GeRw5PXrFJ/OgZy8LMQCo4sfcG3bFI1FOO5cFnwDbz6ryRJcMbN5ZGo7g3PUDY8bf0vssfzqKN41YFLfhGos1gEshG9udut7jrihjXSkwZXsXDi4IA72PQbdzgkjL0lKkTwA3AICtq1ORa632YAW3Xe/S5xK5A2yVXiCgLwFaYM4AECJoaVNXLEq3qW1+b/mFj0xA8OyhqFE8yOSWAGNZNJuxS1iLjqpXbtgizANDFK0QEgiPlgjU9mN9Z1D1ra3W/5fhiiosqmpKOnqpS8v3p5aixYMdCmNBdgBe5B6DYYbp2lRnF+xMrbbMmTVCQulPNPFDFJ/8AsQ2APF9j8Prj3mHhtI6eTMae0uhdUqNY6FI3ZSOR8NxgNzaqWLMKYTyjyAth5e4U9wTf2POCvwj4iAjlpS6OYEaWK+4sPxLbt1wqouJudN0umnQcpWbXb4GGzOKhrKCeZQ8cU6PImrUdAI1WXrbb9sG3irxhk2YeH5aGmrKasqKkaYoVYEk9z2t+mA2Q0k8cqQaWpkclW5bmwsOgt/XFNW5WkUjlCWBJvoILD3F+nXBaVXZ5TGqeHGcox47FtmNJFUZPk9NTl2S07M0Qv6tdiRf4DFRT5ZUUyxR180sSX2Uxulj13CWPxub4l5HXBsoRS8kcuV1Jluhs3kTW1EeyuBfsGxoMLipgUtIGsL3Yix/v+mH6EVOPyWnNxXwBuawNHlEkNVUyvSyyKqJMG1aTa+5UbCx4PY4YyPIEqKGKpim0TAKY0mDRsnssgvcXPBBHOLDxnUNULBSK5IcuAemoRtpF/wD2t9cOeF82hGVxrojaNRtqYm3wOGFGO7awcpPZuQ3VZBVrClSlMkVRHGwD0hQkk99gB8VA+eJGdz/dvD0HnPKhFQEiDSXJjVCCTb/3UfLCrc0pq2VqeCnA0qWkn8wokK/5mI6dhyTgdzfNkrKiIQgrT0qaKdZlANurMLHdj0PtgGqlCMdqKXlbI7FVCSKGM21lAigLcsfnz3v1tgu8IeHZMzq3qZjaBXvI4A3b/KvQn34HTfAx4Yyx6iSNAmiWXqQfQnJPa9sbfllHHl9FFSQoAiKMVjpIUIKdTMnwvZC9KfjVWo+lc/I9BTRwIiRIFRRYAY7h6+FiNxo2R8uZz4T8TCsqJ63K8zqCHINQ0bylwDYG+5wV/Y74e8QPnn3yhmky+hiOmqMiE+bb8mg239zxjfkXrj2oUNcWv1xWJLK/Oskoc5pWp6+AOpBAf8y3HQ9MYHmuTfw3N5p8lrzJLQ1Fg9irqyc6gdxbb2I7Xx9IHGPfa3lM2XZ3Hm9CmmKuRVmbT6UnUgKx7XUkH4DApw7x5KyWBnLWovE+ViOmiVc0hXXNQPYLVpe4KX43/vg4pIK6ooswibSFnilIMNVvYmzSWbkBVsLEbbC5scVeYgxV8kkLSR1lO+7X/A/AYEXP6/XFlV+LqbM6V6fxNQg1GkJHmEcYLsBuUkUcqeNsBVquJFYtch/k/iKkWRVaQxGS1o5AQdxqHGx27HFV4klqc/zKCeBESlhAVdQPmb8nTb4m3sD1wH5DmqzTPE/3efUWYhn3KuSZCFPDfhFh0J3OCSHMYqiF4WVF1epw7lgAQCyqeRsQg4HOArQy0+EsEydztBR09IVa5YD13Auu99IBG633JFrW69MOqZaYlBK7rHdVta7StuT/AJWPPY7DjHmomkh9bArMpUqXkC/zG2Cq45sO/Ww3xVVmdU1HDKTMqyU1yY7qsrSW5C/hYW4/9enOL06VSbtFXB2LCsp5aithy2mhDSNZINLEaDt02ZQO4J2HGFmjU9XVeRSjzaenjSlpXG4YLfUxPZm/YHrijyfO5qmmrRQRFTMNMs+rT5KG91S5NmbbUQbAAC/XDmUhBBD5cUkaJcxqyXKdLdb/AF2uMFrx8GDpt+ZlJO+CizjJmkqnPlglT+AgDbp+2HsoyAa43ieNVufNVbhlF7c234+uLyJmM7SOAJFbS6H8yjpb9dvp1woKkx1EgDAp6rOS3q4sCeeBbr07YU8WVrE+JK1h6roEhMUKxgLtpkP4Rc8Ac8gdB0xEqMriqFOptDRjZOsfy9ie+JkU5SkbQPPAexilsNJFja+/tiTGKGWIvU+pigEb6rgqNyOed/3wG8uQWe5n8/37JayKrCCW+pZFkJInRtiD7Ef0w9l/imHKT5UImqKVvUEKDVAT+UnhrcXHPYcYKp6SOWQxm4hLF1uOl9yBxtf9cQa3JaM1mq0YYBQEWw16Rvt35OHaOq2ZGPETjZlB4izhq+CCaGZ7ofMUkEWb8oHw6n6cb0VLmddBMWLNJG7EumrSCTvsRx8sFNRlEYcyPYqpDKQfSPj/AFt2w1FkkRIkVwm/5msttv8AfBvtN89yVONrIipVVM9J/PCR0ysNMEdwNXRjv6ttrnjDtOn3mpSNz/Kv6773HXD8imOdYnAUHje2/wARisOaxUebwVCLdYT6lYXBHXa/GBtud33BVIymmja8rCUFDHmWaymGNvXDTRjTrPNyBycW6+LMuDNFUOIJlsHR5VJQ9jvzjNVziqnrafMMzOqOQ3Se2qIdrW2sDbbFBWNmMNZplpnllmJZXjGsS9SQRe+G+l0o6iUlVla31f1MyjOrSvGmvry/lm2f/LciA9eZwJ8ThYy3J/B+b5uA9QYqKC34pLu3tsNv1wsacqOji7ObNCM9U1fabtE4NgOuM6+0fx6mX1cOTZRWKlT5oarlTfQBvov3O1/bbB/FLqWxN8YN9rvg2fKs5/ieWQSzUNfKx8uNSximNyRtvY7kfP2xlJ5THZLBoWXfaGuulST/AMjzpY4rKOCzBb3+d8HtdTw1dPJTVMaSwyLpkjcXDA83x89fZ54H8US55l1bWZdPS5fFOkztU2j2U32U+q5t2xt3iTxBT5PQtJJ655LrDCp3duu3Yck4mbSyVXljkyzNaKKozOrZYNR1yAWf8VybdLfr++FDlWXy0zPUCNl3UuFXa/5re1mPtjief96ZIzKsjgNISdiCeG+O49IxKRmWOZXkmEy+tA13vvYgd9v+MYs273FYsEMx8LxTkJQyRgpdSVFwSPzFum1+TbY74bfw9mSRL91kngZdhdyyuLCxF7j32wW0MxiMkRMeqTkqLKWsTz8Opw9DNUJAkUZ83fQCSp099iPqOmDw1VWHpYaM7gSmS59JHeerqBEGs6eZpI99zb54fovDEDoZKypdmttGx1Em5ABA55/6wZl2SUMRpUAXVm/Eo2FunS3ywzNFGkZk4l12Qs1ybcEX63B29sGfUdRNbXJld1yNTQPHTxRNZpIybDa/c22sdtrX6Y7L6N4o9a3UjVdONz1tv78d8e6WB1SJ10ygLeUra5PvY/ptwe+Pc0EEtNFIsjkMdYdiNI2G1u1yBvhRt3ByPAp5YYP5UQdktZQbgg8Agkb7npjja4ZSs1P5ate+m1/n06nDiJIia2SQKXARm2YdVI77b8Xx2qctSebMdcR2cIt+vQDc3t+uIaKtDEkjC+o3aSx0omnrspttfnr1w4YkA9UF1j3CkA6QT+b9t8MxoQnlvGpW4dGCMFK269Lc4lwhdRVSQQXVlLEbbd+9ib4huxF7IbkJnpyNo2jQHcWI349v04xEqv8ADhZUZmjsUYkAXuN/ja/HOHp9XlgxxGRNOkrquAO/xwy8iosikkFiCtj2PBH+2JUrk3GZ1J1TBYuQwVQQP9Qtf4/3viDNPpvHDcxqQqkm9uth/wBcjEmTy1hkO7agXCrva3b6f8Y8RmnaIBXUliFswA3+lxvi6v3OK3M4dIZoQx1N6yu1r/P9sDlfSMdlTWOV3/F8MGZhQsfwKymzjXY87fp1xXVlLTRaJdboDdgJEtZb8avjf+zhinOwaEgfyXOM3yVitFMRC34oGF0f5EEYMsk8e0UD/wDlZKkYJ3MI0pq76L6b+9sDbU6yCBJAQVudYsRp3It3PG/vfEmnytRUgapWQrc+nWD1PxvgrlF5tkJdcmkJ9oeVGIMIaxjbZFh1G3yOFjOaqKmESNFUNGW/DIqEaO4spvboN++FiiSL+NI16l+0XwvIoYZzToLXs5KkfUYI6DOKWvpkqaKoSaCRbrIhuD74+dJPDEcgaaMABfxJI1vVe2xH9cSKDN8w8OU3lZeGp43cB2WMk2/zXJsSfgLYNGcWvKy2659CVucU1JTtNVSBFUHki5PYdzjJs4zCfMs7qM2qqbWrq0cQLavu6KAVHI33YkdT7WwO1WYT1aSVVRmErhdLRvOg1qxAuov+W/QDBT4by6XxB4aaqU1TVVNU+Y9MF8oSRAghoyOT068fDFZT3KyCPR1Xa6smQ6eoJjiKCJClmCFzc7iwseR0xMEqgypUs0QjswMrC7XBIsTs3Xm2PXimk+61tJV5fVvVUtTTh4xLNpYW2s23Nwd/68RVlCrpmp/Je20lP0cb2HzPfa5wnOnfIrVouDszoEsmqdK7zlQ3KottiObbHkb79sSIp9SlRIFRhdwqAdBc7e+31xGSunppxHPBJ5tlQSDYn399/frh6nYFHCM8jkEkD0+kc/E/74HYGlYmRkr5TXjmEa6BECNwBckDuD+3xxHSeSFpAY7KBfU/4Tb9uh+OO0kkcEKefAovsoPfUfV7XucOTGZXLQVbkhboUH4rdOl+fmDiq+TuUeykWyBBGWXZg4NrbDvthiFRDEqvKjn8JW2xttew6Xtt+1sOiIPpCyhg1tEi7Eg9D15/f5YZeIOI0hYDUfM0W4N77npffrbE3tgrgmiNV1AhiBYN6tmFjztt0/6xHSJPKC0uliXLFZEOo2N9vnvfYYcjaVxJJGhGlthCfwnm36X6c48UkxmiNSyi5GmRTvpNzf4Yi+SvcahA8spPK7MIypTVbUCB+/f3PvhgSM+vTqdeC0SldIIG/W45598S42S7EoA6WCgKNgf3+VsRKpl80rdY42Y6r/5rLp+HB+uI5IcbnqsgJSNuJiAbqp0vbgfrbEWeWCZyJA8bqTfbrvaxPGJMrNIymNtTMBbU2zHa2/T364a1tLUBDIsjxlmDnkgbA2vboRi0TlkYMCDWXuCTqHsO4+h3/bHiKIMkkfr84kFDfZVA3+HXfcfthxYz5W5jVZtQGvlDY9P7GK9FaWREVmMtyhLIbFSd7c9MESJtZkt2WZl0iRXSM7257G/1G/b4YhpHM9Osc8MkdgdKSJtpIv1t2/Xvj2kTpMjpKqmIWGo2t8dt/wDvjnEmFq6WeGip3DNLJYIZAQx6W247kjBEvYn8CDl2XVk0sNNRwiq1ID5Nhtvsb9Dbbc23GPHimjXIQsUFfDJmMj/z6eI6hDYfmPANrC3tjSc0ymup8oGW5NWQ01XOA1XWshLHa3pA2F/jt874CT9l1chvDmtLIeT5kTL/AL40en6jpNOp/wC2sk12z+oZ06lrxRU+E4VzvPo6OqBiEqMxKb6mA7H545iVW+AfEVKdUdItUOjU0lz+tjjmNbVdP6brJqrpdTGMbcY/dlFKaxKLuUkdVHVnRTwtqADkltgeP2xwV9phT0cJrayRjpCrcK3t12H0w2tN9+S8kv3LLUPEa6nfttySe529+mJC11PSq1FkNON9nZLlpf8A3fkj/SLL8ececsv+/c9HR06hZRWfd/shTUIomiq82qY6mp1HVTDeNBpNgSOWvbZbjuRi6y/x3mmXpS1FNSh/IkCyzMPVUoOFIGw9O1x2BPGB+T7rSDzczkNVWm+mIH0r0HHT6YK/CubU8EcFLmGU0M0am6akAZCehJG/zxDqbchdRGMYuL9Xty/z/wBEmbOJc+MtW1EtLI0KsESNAxIZiQG63JvuffbDVHEadJDIPKLuS6oAC2wuLg+9+bDBBNHk2Z5rCtOyUQjGp4W9Oq56Nutjvtx7YVXkVXDWPHk1LFWU8sXoLehoubjkX24I6DA6lVTeDAq0aiV3kqWo2gigMgBVEtpI9DE73tvY9PrjtFNHHK8mlnjKqHF+bna/vvhmPzYZGiq9cbBrIkhZnjvYlWtuBY2+Pyx2KVoaogECQtYKqjSy267/ANBvgLTFMosQl1Ip22IICXIuO3HB3+gx2UwRSmIgGS19IBa4ubW9t7/LDCkiYXjKyLHcAke9tu1u3fjHZZp1pkU2eY8kE+kd+LfXtgdmdcflqVllHpUvLcuQoYc7Fb/H9e+OP5gjVFl/ldFDFSnBt0+n+2PKvBJZtU1lvZFGyk8XtwNuww5Wx1AbUoSX0jUrKfjcfXjHdzmjzK2ii85Xd5Qo1G5/me+/Pz98MBjcNDOsUq20to0htgbbdcOTh4YoQ62iIBvwV/4+fviNIGVNUMPmTaQzHUAu1/fbfk/0xMVkr3HjO6RiSo0qQSBpjBIPcg9wQL44j1LSAytKXaMsDqvpXaym5374TLHEsYmFvXpIbcb73v2369sPVD+TF5FPqjPFuQhI4/YYsyb2I2YIzFWdTMAt7gAXvwT+v0OGKSaPz/KFMqu7rbQN2tuTfr1/2wzXtKKGIjy0ULeTSdNjv37dsDtRmks7KySMsANtIcqzr7nkd7C3b2wanT3clkrsvahYhLJK0wd77LrJK2BxBDyMCjFgsYIBDeoXHW3xxUSUktTIZKaJII2P4SVYH4dge/74bWomoJRtIQg5A1Ix+u3y/wCMH8NcF5Q9i2q6jXHJGqNcEnZQNIIIGw6cfHF79mEIbNXmdWRYY7qrb7m4B/8A6wK0UkNUSqOscx3QuS2r2Hfjg4Lfs3lSPNK1AQHkQNoudiCb/LfFJeTn4OpQ8xIrPtEp6XxJmNDmdJKiQVTwrNF6tlOkEjngdMFeU53lubRh6Csimv8AlU2YfFeRjIftSpFpPF9RKjqwqkWcqOVJFjce5F/ngZhneFxJHIY3HDKdJxr6j+EdB1GmqtOThN/mg3jyi7M+m45inQ2wsYZlHj3P8u9JqVq4gLBahQSPg3P1vhY83V/gLq1ObjSalH3vYItTDuUmUMMwP3eaVoo1AI8q5Zre3U2vh5pWctBlUbRUoYq87ga/pziJBEIiSvPfFvS1ElWvkNpaq0/ynPJ7j3Nr2J7HvtquC5G/ttWNPbHn372Kw0tLDU0wMrOXmTUW6C+5weRUyxVcUbx+cGKl9F7op4Nxx88CmV0qPn0DVFOauFEZhGJSALcEEDi5v9cEVXWzOI4qQCnQa0Ygs9wbjbrtf9/hhLVWlKKuTpG9jl7jtNPL5dVWqWIb+THE0e1ged978j/bGhZJLU0s9PQ1Ua+Q8PI4EguWAtxbi3tgOyPLpTHHO0yyLRzMrDbSNIB6e4/bBLF502fZcizX1RAsoa+5O9z88KPM0gzeByr8L19W65hVJJBP5ahlRfMBstvUA2+56YFpqKooZjTzMLxqGJjJAZCeQ3NiO/Y42laa49M8tu2rGafaBqg8SItMF3p9bFrdOn0v9caNWhtV0zLqRi18g/V3SZJIGFkTVxyDf0ixH/WHEeNfVIXkjLenV6bew39/riLHGzsIipPmn0t5l9W54N+e+xHOJcCTVpaKgLfemIUxxjVe3U/tfCqQqoO5Jk8uwlQ6S+wKggOdrD9+O/OOyzD+VuoBF1kP5bflN+vx7YgeTUU4aOenMFRENWlgQzJb9fjvhmaZ4zG38wKjAudXW/PHuNsRtId07E+SpZgYpJS6MQqk23BNhb53HvfEXy1clHTSQd7Ha4A3+BK9d8MEGSVIpELyu5Zje/8Ae+2GY5GRkjdUjkXZNa3GkDcHrxfEqPuQoNsn1DAFI3Mkqu4Ym+pRcW/qPhhqCWq8torN5cvqA2JAHbbc7+/PvjqZjESVSVJVAKhQL7C/5Qd997bHbDE1RFNOv3N3hJayAgAEkAW5633BxKic4lDmocJHHKf8aTSxjN0UXue/NsTo6GMw6dFnOk2PJ+HZv74wPZjW2zSN4y+nV5gZyCf0t1OLSGrklgV2d03uzMbEX3I/vv1w3sairBErIsVo4i3lkiTRa4BFwTzsL/H/ALxEnhjY6pI1W62NhYKB1sdr4ReV/UZVkGm2gNckG+x/X9dscKvKyGPULtY7gW78ccDfHNMm5VV1DoaWSlfzF2a9+e1iOvb4dcesk8QfwnMaaqay6GKyqOHXi/x2w9XqmjUq/gYnURdj7WG+39fjihrEjZfNiNiLC2q4I7/HBFFSVpFoHvxBmbZ5nVbmLGwlkJjQ8rGNlH0AxpvgDwtTUeSGfNaSOaorQC8UyBtCflFjwepxlWTPFS5lTVE8P3iBJAzQ3sWGNqyvxJlmZACKqVJTzHKdDfrzgPXuoah6WFGgml3a+A9GMd15AH9peT5Tk1TRfwqBoHqA7SRhyUAFrWB45+GOYhfaZPJXeJnEKu8NPEsQZQSpPJIPxNvlhY9N0TW6iloKcarbdu7yBqKO5lZfHkStDIkibMjBgfgbjHgN74QR5iEjF2Y2Hxxhhy1yWuqaXxP/AOOSHtIBY22vccb23/XBZ4grYJMxgqY45DJdGELL6Q42BPYXAPW98C9Hludz1VTm+TZdPPGsrIJVAKlQADz8OmLPL8wGbUMn8Sb7rVUsygPouJLb2I2sdjhLVU5btyWBnTTjt29wmyGSSkeeCqUedKoUIPwne/64up8wiy6iq62ppAlXTUauyEhd1bTbfodI4xV0dUlXArSiJiJQrMr2sLG253G5HNuMO+Mq5KnwvJLUCNFl8gJf0sTq1MPfYi9iRhChGTlkPUL/AC7xacyofNynK54aoqfLSWVFU2te9ie4xQZ9UGoz0mrIaRFCOVJvqK7gfW3y9hi7yEZf/BqOZSoYoBrLaQxNj7dhgWlnikq6loSWWadpg4IJA56DDEa06jdxHUpRjZDc0lPvH5J0EMuljyu247Xt17YsPAFLW5lmNTnFLI0KwAworj0yNf1cdON8U0FLNmGYU9NRoWeVhaSYsxXfc39hvfjp2GD3Pswh8K+H4qDLwDVGMpAvv/mPzOLTWNvdg6Kt5n2K7xT4koK+CbLpaRnzGla5AGoKdr6WHNx/yMB0CrOYUp2ljYXI6hrcHkWH+np37tf4V0hDvO6kyOwV2k66j33v9T0xaZE0ctLrjYOGcknTaxvuLcjAq9TwKd+WM6TS/ba3wuSSlBHFFSRG5M0gjIvsoF3NvoB8MFdJTLGoWBERV4VVt0t+2KN/8fLha/8AOb5enBRRPHFGZpSfLQbjqT0A9ycJ0oyrNJvk2KlOnp4vauCrzSKmjSOKWjWoqJCfJhAAYnvf8oF9z+5xS5j4UlMLzRCJ5iCTCoNr9gWv7dOmDmjy9jrrJlX7zKNzfheij2G/1J649VdKyqWAthydCVJeQQap11aaMKzjLrSvM7IoJtbQbq17nta+OJTxpGk8IYI/4Yw3UdRv/fzwd+NMmjqac1CJb1DzgvFrWvbADQVP3dDRVyFGszxPa4YHoP7FvjhvTVvEgZlajKjPaTVJSjj0qqyDYrpFr9Af7+uGvL1Fkk1H8LFE0897def7vgo8H0uXvQyT1sCS+ZP5V7sAqiw/rzvi2z7wEkLr/C6tVjf0rDMNr9N1Hv1GGHBtYANGdTRebrAgdZFNixFzfgdAPf8A3xTVVN5emRWD6m4AJI6/3bvgyqclraCjSrqUj8mRmhLa9QjYXuCPcj3BsN98D2Y+UV9MaglgFCnaxGxG+IV0yIt3IeT5b99EflJI8rD0xqhJZiP75wV0nhrzW0ZzNFTvP/gU8cimWVgeEubD4m/wNse8hpYaNafK3165qf7zXzI+looANQi7gW03HUkXw9ks0c+b5hn7AoaemeSIONoiF0rot+UDp/vfEN5yEduR6oyrIPD2YotXRV007RmQm+qNCeRcadR722B+uFisyjMoRVnK82OugnYsJNd2RwAdQv362747jnMFvXsVWUfZ/wCJ8zRHjy408bC4eqcR3Hw3b9ME0P2XZpTZbU1MVXFPWoto440Nv9Wk9TbYHvfrY4JfAWfVWZU+S1E8t4pqeSOZVA/xQbD6+r9MQPBXi6SjzKpyLPahfTWTRU0zncEORpb2PTHSlIesuCZ4Y8ZeHcs8LQUk1RFSz0sQhkpZQVkDjY2XlrnfGZVOa0ldXVLRoYvvFS8pQ9bjYfQfrg9+1nLMojoDm8hWmzW4SPT/APkm/DDuB+bpjG6N4HrYzOxVAfxA2JNtgT0F9r2OOt4sDoN05mk+Fo54CJjO5jDqVAO0jKRa4+mLbx3S1mZCjq8lSKSmRJXaEm+vXp1JtwRYWP64z163Mqim8qGupoIr2EEciqCPdib4O8t8XUlPRR06VtPTFDqlHl+ZqsABYqR02+fthNU6kJXvccnKM+1iRUTFPDsUCI8PnFYjDKwuo7qRyRYD31X98U01esejzfTF+BBYAkC1h8hY7789cNVebzVsVqKKX7nE5cTyg2lfcayw7gE2xceDMr/jOY/eKqKP7rTgCRip9bCxAG+3Av7fE4tFKnG7Eqr8WpZcBB4RoIsgyioz7Nv5TyRlx5h/wY+3ztgKzPM5c2rZsxrPSSbRrrt5Sje2x+fz+GLf7RPEC1eYx5TCxFNDczMBdS9rgfK9/jbAXLURinkNiuqwd1e/q4sb9dvbFqUW1ufcpWlZbESDK5milE93Zz5mg9NjY7bcHF/HHIkpq8tX+awvPTXsJT3UdG9uuAiOcivjvYA3IZmG3tb+uCOkzRmURUS+bKNtR3SP3J/phfVwm5K3BvdHjTVB/wB18BLkWYwZvmCNEGtSqyMGUqfMYi4t7WwSUDGvzB5Ab0VGxRCOJZOGb4DdfkcA0tNDBQKtOzR5lLLaKqU2cuxuzN3HJt+2LCbO63w7l8GXyiMiVhHBVRKSgX8zMvIKi/t74BTSv/L+nwG1CksVDR/41FFIsLHzZjxGguxHwG9sTpp6iWHUY0iB6Od8CWTSUsNOWy6QOslmeYNdpD3LYsjXHywoa+GftcNrTEnpZOVysr6fMJ3mjespooZAVKpCWJv7lh+2MuzrLhMxIIjliYgWBJIHPuDtjWJHu174zGoeGSqr5I3AkaolDLp5XUd7ke1h8cA0NZzqSSF+o09qi+5Y+CMxpVoaujzCohpmjfzkeeTRrU8m5NtvbF54g8fQSNoylUqdIJEsjHQD0O+54Pb9RgPr6OOrkiqY2d0aMkq+1rD367dMdTIFMIqVoZVjLEPIt1AbcW/S/bGzGskjKk/YZzDxJXy0BpqqWIw+a0umNLa2a5N/rx/tipnjZaX71KhdWUOLcKCd/bcftbFxL4aEuowrqMQHmlmD7EXJsCTtY7W6fMQ/uc1DohlkBp5wxp5yAbX5RrfW3sd8S3uI+S/edY/EPiT/AAmdqZiiuNjHrQ9N7aNPyxzwWS89TRSvcVlNIi2FgCQbfQNf/wCuK41kkVNTZpHplqcvAgq1G4lisQrH2Ist+9seC33OaDNstLS0aMWSW/4W6I4/Kenvgbj3KMrc1En3aVaiPQwkuHPT2473wsFGY5TBmtfHmDuEympTzZpidoZOCo+LEG3ue2FiLP2Bs9/ZVPJ/8dhN94cyZU9gQhP6jFN9pVPGnjLN1W4G0oAPDaeR9McwsR99mhV9ESrzqrqa9RUV9RJUSpAEQyG+lVNgAPlc9zgVkANjbnfCwsFpcAESKWNXpKkEf5N/niXSQQhi/lrqREZeRYk4WFi0uCZcBrTUca5VWTgvrWFlG+1gw6fPGlGGPIvCM38PUL5EJK6t7k8k9zvhYWMvVfdGdJ6TKsuX71SPLMzM0itI+/LEG5xGJEkqwMiFJCxbbc2x3Cw2hXuUtQoZqWR7sWYCzbjpgmoHIQILBR0GFhYW1noR6PoX3ifRu0meKrm4hpgyDsWJv+wxb01RIudwhTbRSEqe13N/2H0wsLGXP1f4mw0ms+7JmZUscOVVWa0halqYtRtCdKOQL+pePpbHrIcwnr6WOSo06mVWJUWwsLEVs0FJ83EqXqki0mcpC7LyFYj6YzCGZo188KheRF1XUH8XqP6qMdwsE6RzP8TI6x6ofmWXhqigzTxHSUFUg+6/dzP5SDSL3tb4Y0bxMRTZLV08KIsRpWGlRa3pbi3FiLj3JwsLGlUfm+hn0F/LZnf2cZbBL4lq1dpCtPTo0YDWsST2+GFn+cTSeIqqgeCnMcqgF9BDjYdb7m++98LCw9T/AKj/ACBv+mhzKsmp4sro87jklWeWJvNh9Jik1bsCCL2N++J9B4dpcvrKyspaiqQxXHlaxocc2ba5G/fCwsFtkA+Tz4dzR8xhzKGampEiglDIkUQUXJIufrhYWFghB//Z"
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import Csharp from "./images/csharp.png";
import java from "./images/java.png";
import sql from "./images/sql.png";
import web from "./images/web.png";

//should use export for use  these data

export const courses = [
  {
    id: "123",
    title: "C# Programlama Dili",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    price: 120,
    link: "https://www.udemy.com/course/c-sharp-programlama-dili-her-seviyeye-hitap-eden-egitim-seti/",
    image: Csharp,
  },
  {
    id: "456",
    title: "Java Programlama Dili",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    price: 125,
    link: "https://www.udemy.com/course/java-programlama-dili-her-seviyeye-uygun-egitim-seti/",
    image: java,
  },
  {
    id: "789",
    title: "Uygulamalarla SQL Server Öğreniyorum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    price: 130,
    link: "https://www.udemy.com/course/uygulamarla-sql-server-ogreniyorum-adan-zye/",
    image: sql,
  },
  {
    id: "459",
    title: "Modern Web Geliştirme Kursu",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    price: 150,
    link: "https://www.udemy.com/course/modern-web-gelistirme-kursu-sifirdan-ileri-seviyeye/",
    image: web,
  },
];

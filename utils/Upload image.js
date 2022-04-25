
import { ref, uploadString, getDownloadURL, uploadBytes } from "firebase/storage";


const [image, setimage] = useState(null)
  const [Url, setUrl] = useState(null)

  const handleOnchange = (e) => {
    var array = []
    for (let index = 0; index < 6505; index++) {
      if (e.target.files[index]) {
        array.push(e.target.files[index])
      }
    }
    setimage(array)
    console.log(array.length);

  }


  const submit = () => {
    var array = []

    function runCode(index) {


      if (index < image.length) {

        const imageref = ref(storage, `pornstars/${image[index].name}`)
        uploadBytes(imageref, image[index]).then(() => {

          getDownloadURL(imageref).then((url_link) => {
            setUrl(url_link)
            array.push({ name: image[index].name, url: url_link })
            console.log(`Completed ${image[index].name}: ${url_link}`);
            runCode(index + 1)
          }).catch(error => {
            console.log(error);
          })

        }).catch(error => {
          console.log(error);
        })
      }
      else {
        runCode(index + 1)
      }



    }

    runCode(0)

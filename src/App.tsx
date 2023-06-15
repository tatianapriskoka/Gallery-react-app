import { WebGallery } from "./Gallery"


function App() {


  return (
    <>
      <WebGallery
        photos={[
          {
            id: 1, src: '/photos/foto1.jpg', preview: '/photos/preview/foto1_prev.jpg',
            description: ' retro volga car'
          },
          {
            id: 2, src: '/photos/foto2.jpg', preview: '/photos/preview/foto2_prev.jpg',
            description: ' ducks in the lake'
          },
          {
            id: 3, src: '/photos/foto3.jpg', preview: '/photos/preview/foto3_prev.jpg',
            description: ' retro volga car'
          },
          {
            id: 4, src: '/photos/foto4.jpg', preview: '/photos/preview/foto4_prev.jpg',
            description: ' retro volga car'
          },
          {
            id: 5, src: '/photos/foto5.jpg', preview: '/photos/preview/foto5_prev.jpg',
            description: ' retro volga car'
          },
          {
            id: 6, src: '/photos/foto6.jpg', preview: '/photos/preview/foto6_prev.jpg',
            description: ' retro volga car'
          },
          {
            id: 7, src: '/photos/foto7.jpg', preview: '/photos/preview/foto7_prev.jpg',
            description: ' retro volga car'
          },
        ]}
      />
    </>
  )
}

export default App

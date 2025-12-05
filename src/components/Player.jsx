import { useRef, useState } from "react"
import { Button } from "react-bootstrap"
import { FaPlay, FaPause } from "react-icons/fa"
const Player = ({ previewUrl }) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={previewUrl} />
      <Button className="bg-dark border-0" onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </Button>
    </>
  )
}

export default Player

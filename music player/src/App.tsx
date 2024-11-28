
import { PlaylistProvider } from "./PlaylistContent";
import MusicPlayer from "./MusicPlayer";


function App() {
	return (
		<PlaylistProvider>
			<div className="max-w-7xl mx-auto p-4">
				<MusicPlayer />
			</div>
		</PlaylistProvider>
	);
}
export default App;
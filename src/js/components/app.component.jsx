import * as React from 'react';

import SearchContainer from "../containers/search-input.container";
import SpotifyPlayerContainer from "../containers/spotify-player.container";
import SceneContainer from "../containers/scene.container";
import ArtistListContainer from "../containers/artist-list.container";
import ArtistInfoContainer from "../containers/artist-info.container";
import RelatedArtistInfoContainer from "../containers/related-artist-info.container";

export class AppComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-container">
                <SearchContainer/>
                <SceneContainer/>
                <SpotifyPlayerContainer/>
                <RelatedArtistInfoContainer/>
                <ArtistInfoContainer/>
                <ArtistListContainer/>
            </div>
        )
    }
}

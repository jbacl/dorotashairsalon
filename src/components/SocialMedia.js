import React, { useEffect } from 'react';

function SocialMedia() {
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div>
            <div
                className="fb-page"
                data-href="https://www.facebook.com/DorotasHairSalon/"
                data-tabs="timeline"
                data-width="300"
                data-height="100"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/facebook"
                    className="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/facebook">Facebook</a>
                </blockquote>
            </div>
        </div>
    );
}

export default SocialMedia;

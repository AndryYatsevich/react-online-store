import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AboutUs extends React.Component {


    render() {
        const style = {
            padding: '10px',
            height: '100%',
            width: '100%'
        };
        return (
            <MuiThemeProvider>
                <Paper style={style} zDepth={1} className={'content'}>
                    <div className={'catalog'}>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl porta, volutpat sapien
                            porttitor, congue risus. Sed ut tincidunt nulla, in laoreet est. Maecenas eget auctor dui.
                            Mauris aliquet eu nunc nec finibus. Curabitur interdum vitae enim at iaculis. Curabitur id
                            quam ligula. Pellentesque nisi turpis, porta quis mi ut, aliquet luctus nunc. Nullam ut
                            convallis leo, a finibus metus. Praesent in semper eros. Proin semper erat enim, ut
                            vulputate nibh pulvinar ut. Mauris a scelerisque elit, ac ornare sapien. Curabitur laoreet
                            ante sit amet ultrices pharetra. Donec sit amet varius purus.</p>

                        <p> Pellentesque mi nisl, luctus in neque sed, mattis tincidunt ex. Integer hendrerit nisl ut
                            magna auctor, a dapibus orci placerat. Quisque porttitor urna augue, eu luctus mi vehicula
                            eu. Nullam rhoncus hendrerit tincidunt. Vivamus tempor ipsum vel urna cursus molestie. Morbi
                            faucibus malesuada ex, quis commodo massa accumsan tincidunt. Aenean sed dictum ipsum, ut
                            tincidunt mauris. Morbi eu rhoncus dolor, vel efficitur dolor. Suspendisse enim diam,
                            venenatis nec odio a, tempus lacinia tortor. Nam venenatis porta ornare. Proin consectetur
                            erat rutrum diam elementum, vitae consectetur quam ornare. Pellentesque fermentum volutpat
                            velit, a molestie quam commodo vel.</p>

                        <p> Aliquam tempus vel arcu at aliquam. Aenean id facilisis urna, vitae tempus neque.
                            Pellentesque ornare, massa eget aliquet tristique, nisl ipsum finibus tortor, quis luctus
                            massa velit vel dui. Vivamus consequat, lacus sodales rhoncus semper, leo erat egestas urna,
                            at ornare nibh diam id augue. Mauris nec mi finibus, tristique purus ac, pellentesque augue.
                            Suspendisse suscipit tincidunt lorem, a pellentesque lectus facilisis a. Quisque ac
                            convallis eros.</p>

                        <p> In hac habitasse platea dictumst. Sed nunc odio, vestibulum vitae velit non, aliquam mattis
                            lectus. Duis in lorem vitae dolor consectetur porttitor. Ut vel erat at orci efficitur
                            cursus in eget massa. Phasellus vel dignissim risus. In sodales tortor risus, vitae accumsan
                            turpis posuere sed. Cras massa ex, rutrum quis ex ac, rutrum pulvinar sem. Donec vitae
                            iaculis leo.</p>

                        <p> Quisque eu lacinia justo, eget bibendum est. Vestibulum fermentum turpis vitae leo congue,
                            sit amet fringilla quam iaculis. Sed non commodo ex, vitae mollis quam. Vestibulum ac ex vel
                            lacus fermentum dignissim eget eget mauris. Proin scelerisque tincidunt elit, eu porttitor
                            tellus luctus ac. Morbi suscipit nisl vitae diam tempor, finibus ornare eros cursus. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
                            auctor vulputate aliquam. Ut hendrerit dolor sit amet gravida egestas. Suspendisse a felis
                            volutpat, elementum arcu et, suscipit sapien. Sed volutpat facilisis diam vel condimentum.
                            Maecenas laoreet aliquet ultrices. Proin rutrum id ex ac aliquam. Phasellus at efficitur
                            urna, id bibendum eros.</p>
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default AboutUs;
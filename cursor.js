    MouseFollower.registerGSAP(gsap);  // depends on gsap to work .include the gsap script
  

    const cursor = new MouseFollower({
        el: null,
        opacity:.4,
        container: document.body, //Cursor container. Body by default.
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',  //Text class name state. found on sass file
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',  //Media (image/video) class name state.
        stateDetection: { //	Allow to set predefined states for different elements on page.
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,  //Is cursor visible by default
        visibleOnState: false,
        speed: 0.55,  //Cursor movement speed.
        ease: 'expo.out', //Check gsap easings
        overwrite: true,
        skewing: 1,
        skewingText: 2, //Skew effect factor in a text state. Set 0 to disable skew in this mode.
        skewingIcon: 2,
        skewingMedia: 2, //Skew effect factor in a media (image/video) state. Set 0 to disable skew in this mode.
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });

//ADVANCED USAGE

    document.querySelector('.div').addEventListener('mouseenter',()=>{
        cursor.addState('-inverse')  //adding a state to the mouse follower
        cursor.setImg('add image path here')  //show image on the cursor 
        cursor.setVideo('add video path here') //show video on the cursor
        cursor.setText('add your text here')  //show text on the cursor
        cursor.setIcon('icon path here') //icon

    })
    document.querySelector('.div').addEventListener('mouseleave',()=>{
        cursor.removeState('-inverse')
        cursor.removeImg()
        cursor.removeVideo()
        cursor.removeText()
        cursor.removeIcon()


    })


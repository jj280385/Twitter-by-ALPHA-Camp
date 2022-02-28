export const nullAvatarFilter = {
  filters: {
    nullAvatar(imgSrc) {
      const avatarImg = [
        require('../assets/image/people-diversity/artist.png'),
        require('../assets/image/people-diversity/bald.png'),
        require('../assets/image/people-diversity/boy.png'),
        require('../assets/image/people-diversity/fedora-hat.png'),
        require('../assets/image/people-diversity/hipster.png'),
        require('../assets/image/people-diversity/long-hair.png'),
        require('../assets/image/people-diversity/man-avatar.png'),
        require('../assets/image/people-diversity/man.png'),
        require('../assets/image/people-diversity/woman.png')
      ]

      return imgSrc || avatarImg[Math.floor(Math.random() * avatarImg.length)]
    }
  }
}

export const nullCoverFilter = {
  filters: {
    nullCover(imgSrc) {
      const coverImg = [
        require('../assets/image/cool-backgrounds/clear-lagoon.png'),
        require('../assets/image/cool-backgrounds/cool-background.png'),
        require('../assets/image/cool-backgrounds/ember-spark.png'),
        require('../assets/image/cool-backgrounds/persian-lounge.png'),
        require('../assets/image/cool-backgrounds/ranger-made.png'),
        require('../assets/image/cool-backgrounds/ruby-garden.png'),
        require('../assets/image/cool-backgrounds/sea-edge.png'),
        require('../assets/image/cool-backgrounds/spanish-paprika.png'),
        require('../assets/image/cool-backgrounds/tropical-salad.png'),
        require('../assets/image/cool-backgrounds/wooded-flora.png')
      ]

      return imgSrc || coverImg[Math.floor(Math.random() * coverImg.length)]
    }
  }
}

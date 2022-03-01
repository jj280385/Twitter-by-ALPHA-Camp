<template>
  <div class="userCards">
    <div class="userCard"
    v-for="user in Users"
    :key="user.id">
      <div class="cover">
        <img :src=" user.cover ">
      </div>
      <div class="avatar">
        <img :src=" user.avatar ">
      </div>
      <div class="name">{{ user.name }}</div>
      <div class="account">@{{ user.account }}</div>
      <div class="tweetsAndLikes">
        <div class="tweets">
          <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5576 0.802539L10.3726 0.790039H10.3701C4.90262 0.790039 0.620117 5.07379 0.620117 10.5425C0.620117 15.665 4.60262 19.55 9.95137 19.755V24.54C9.95137 24.675 10.0064 24.8975 10.1014 25.0438C10.2789 25.325 10.5814 25.4775 10.8914 25.4775C11.0639 25.4775 11.2376 25.43 11.3939 25.33C11.7239 25.12 19.4851 20.155 21.5039 18.4475C23.8814 16.435 25.3039 13.485 25.3076 10.5575V10.5363C25.3001 5.07754 21.0201 0.802539 15.5576 0.801289V0.802539ZM20.2914 17.0175C18.8739 18.2175 14.2139 21.2738 11.8264 22.8213V18.8375C11.8264 18.32 11.4076 17.9 10.8889 17.9H10.3939C5.81887 17.9 2.49637 14.805 2.49637 10.5425C2.49637 6.12504 5.95637 2.66504 10.3714 2.66504L15.5551 2.67754H15.5576C19.9726 2.67754 23.4326 6.13504 23.4351 10.5475C23.4314 12.935 22.2576 15.3525 20.2926 17.0175H20.2914Z" fill="#657786"/>
          </svg>
          <span>{{ user.tweetCount }}</span>
        </div>
        <div class="likes">
          <svg width="20" height="20" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 24.0473H12.9825C9.75375 23.9873 0.4375 15.5698 0.4375 7.59728C0.4375 3.76728 3.59375 0.404785 7.19125 0.404785C10.0537 0.404785 11.9787 2.37979 12.9987 3.81729C14.0162 2.38229 15.9412 0.404785 18.805 0.404785C22.405 0.404785 25.56 3.76729 25.56 7.59854C25.56 15.5685 16.2425 23.986 13.0137 24.0448H13V24.0473ZM7.1925 2.28104C4.5925 2.28104 2.31375 4.76603 2.31375 7.59978C2.31375 14.7748 11.1062 22.0948 13.0012 22.1723C14.8987 22.0948 23.6887 14.776 23.6887 7.59978C23.6887 4.76603 21.41 2.28104 18.81 2.28104C15.65 2.28104 13.885 5.95104 13.87 5.98729C13.5825 6.68979 12.425 6.68979 12.1362 5.98729C12.1187 5.94979 10.355 2.28104 7.19375 2.28104H7.1925Z" fill="#657786"/>
          </svg>
          <span>{{ user.likeCount }}</span>
        </div>
      </div>
      <div class="follow">
        <div class="following">
          {{ user.followingCount }}個<span>跟隨中</span>
        </div>
        <div class="follower">
          {{ user.followerCount }}個<span>跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminUsersCard',
  props: {
    Users: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.userCards{
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-left: 1px solid #e6ecf0;
  height: calc(100vh - 55px);
  overflow: auto;
  padding-right: 15px;
}
.userCard {
  width: 245px;
  height: 314px;
  left: 0px;
  top: 0px;
  position:relative;
  background: #F6F7F8;
  border-radius: 10px;
  margin: 15px 0 0 15px;
}

.cover {
  position: absolute;
  width: 245px;
  height: 140px;
  left: 0px;
  top: 0px;
}
.cover img {
  border-radius: 10px 10px 0px 0px;
  background: #C4C4C4;
}

.avatar{
  background: #C4C4C4;
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 68px;
  transform:translate(-50%);
  border: 4px solid #FFFFFF;
  box-sizing: border-box;
  border-radius:50%;
}
.avatar img {
  border-radius: 50%;
  
}
.name,
.account{
  position: absolute;
  top: 173px;
  left: 50%;
  transform:translate(-50%);
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #1C1C1C;
}
.account {
  top: 197px;
  font-weight: 500;
  color: #657786;
}
.tweetsAndLikes {
  display: flex;
  justify-content: center;
  padding: 0px;
  position: absolute;
  left: 50%;
  transform:translate(-50%);
  top: 236px;
  width: 100%;
}
.tweets,
.likes {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #1C1C1C;
  display: flex;
  align-items: center;
}
.tweets {
  margin-right: 8.5px;
}
.likes {
  margin-left: 8.5px;
}
.tweets span,
.likes span {
  margin-left:7px;
}
.follow {
  display: flex;
  justify-content: center;
  padding: 0px;
  position: absolute;
  left: 50%;
  transform:translate(-50%);
  top: 273px;
  width: 100%;
}
.following,
.follower {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}
.following {
  margin-right:2.5px;
}
.follower {
  margin-left:2.5px;
}

.following span,
.follower span{
  color: #657786;
}
</style>
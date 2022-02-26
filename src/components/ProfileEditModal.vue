<template>
  <!-- Modal background-->
  <transition name="fade" mode="in-out">
    <div v-show="modal" @click.stop.prevent="modal = false" class="modal">
      <!-- Modal dialog -->
      <transition name="slide">
        <form
          v-show="modal"
          @submit.prevent
          @click.stop="modal = true"
          class="modal-dialog"
        >
          <div
            class="
              modal-header
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <div class="d-flex align-items-center">
              <button
                @click.stop.prevent="modal = false"
                class="close d-flex justify-content-center align-items-center"
              >
                <!-- SVG -->
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.41387 7.99988L15.2069 2.20687C15.5969 1.81687 15.5969 1.18388 15.2069 0.792875C14.8169 0.401875 14.1839 0.402875 13.7929 0.792875L7.99988 6.58588L2.20687 0.792875C1.81687 0.402875 1.18388 0.402875 0.792875 0.792875C0.401875 1.18288 0.402875 1.81587 0.792875 2.20687L6.58588 7.99988L0.792875 13.7929C0.402875 14.1829 0.402875 14.8159 0.792875 15.2069C0.987875 15.4019 1.24287 15.4999 1.49987 15.4999C1.75687 15.4999 2.01187 15.4019 2.20687 15.2069L7.99988 9.41387L13.7929 15.2069C13.9879 15.4019 14.2429 15.4999 14.4999 15.4999C14.7569 15.4999 15.0119 15.4019 15.2069 15.2069C15.5969 14.8169 15.5969 14.1839 15.2069 13.7929L9.41387 7.99988Z"
                    fill="#FF6600"
                  />
                </svg>
                <!-- SVG -->
              </button>
              <h3 class="title">編輯個人資料</h3>
            </div>

            <button type="submit" class="save">儲存</button>
          </div>
          <hr />
          <!-- modal-body -->
          <div class="modal-body">
            <div class="user-cover">
              <img
                src="../assets/image/cover-photo.svg"
                alt="預設的使用者封面"
              />
              <div
                class="mask d-flex justify-content-center align-items-center"
              >
                <label
                  for="upload-cover"
                  class="
                    camera
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <input
                    type="file"
                    id="upload-cover"
                    name="cover"
                    accept="image/*"
                    class="d-none"
                  />
                  <!-- SVG -->
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                      fill="white"
                    />
                    <path
                      d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699V6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                      fill="white"
                    />
                  </svg>
                  <!-- SVG -->
                </label>
                <button
                  type="button"
                  class="
                    delete
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <!-- SVG -->
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
                      fill="white"
                    />
                  </svg>

                  <!-- SVG -->
                </button>
              </div>
            </div>
            <!-- avatar -->
            <div class="avatar">
              <img
                src="../assets/image/John Doe-120.svg"
                alt="預設的使用者頭像"
              />
              <div
                @mouseover="avatarHint = true"
                @mouseleave="avatarHint = false"
                class="mask d-flex justify-content-center align-items-center"
              >
                <label for="upload-avatar" class="camera">
                  <input
                    type="file"
                    id="upload-avatar"
                    name="avatar"
                    accept="image/*"
                    class="d-none"
                  />
                  <!-- SVG -->
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                      fill="white"
                    />
                    <path
                      d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699V6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                      fill="white"
                    />
                  </svg>
                  <!-- SVG -->
                </label>
                <transition name="hint">
                  <span class="avatar-hint" v-if="avatarHint"
                    >頭像圖片建議解析度為 150 × 150 像素以上</span
                  >
                </transition>
              </div>
            </div>
            <!-- form area -->
            <div class="form-area">
              <div for="name" class="form-row d-flex flex-column">
                <label for="name">名稱</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value="John Don"
                  maxlength="50"
                />
                <p class="error-hint">字數超出上限！</p>
                <p>8/50</p>
              </div>

              <div class="form-row d-flex flex-column">
                <label for="description">自我介紹</label>
                <textarea
                  id="description"
                  name="description"
                  maxlength="160"
                  autofocus
                />
                <p class="error-hint">字數超出上限！</p>
                <p>0/160</p>
              </div>
            </div>
            <!-- form area end -->
          </div>
        </form>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      avatarHint: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/modalCommon.scss";

.modal {
  --modal-dialog-height: 680px;
  background: radial-gradient(
    circle at 50% calc(#{$modal-height} + (var(--modal-dialog-height) / 2)),
    var(--modal-background-center),
    var(--modal-background-around)
  );
}

.modal-dialog {
  min-width: 460px;
  min-height: var(--modal-dialog-height);

  .modal-header {
    padding-bottom: 16px;
  }
}

.modal-header {
  h3.title {
    margin-left: 40px;

    color: var(--main-text);
    font-size: 19px;
    line-height: 28px;

    font-weight: 700;
  }

  button.save {
    padding: 5px 15px;
    border-radius: 100px;

    background-color: var(--theme-color);
    color: #fff;
    font-size: 18px;
    line-height: 18px;

    &:hover,
    &:focus {
      background-color: var(--hover-color);
      color: var(--theme-white);
    }
  }
}

.modal-body {
  // 供 avatar定位
  position: relative;

  button,
  label.camera {
    cursor: pointer;
    width: 24px;
    height: 24px;

    transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.285);
    svg > path {
      transition: fill 0.35s ease-out;
    }

    &:hover {
      transform: scale(1.6);
      svg > path {
        fill: var(--hover-color);
      }
    }
  }

  // 遮罩兼按鈕容器
  .mask {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    transition: background-color 0.5s ease-out;
    background-color: rgba(255, 255, 255, 0.25);

    &:hover {
      background-color: rgba(0, 0, 0, 0.45);
    }
  }
}

.user-cover {
  // 供 mask 定位
  position: relative;
  background-color: WhiteSmoke;
  margin: 0 1px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    object-fit: cover;
  }

  .mask:hover {
    &::after {
      position: absolute;
      top: 25%;
      color: lightgray;
      content: "封面圖片建議解析度為 600 × 200 像素";
    }
  }

  button,
  label.camera {
    margin: 0 15px;
  }
}

.avatar {
  --avatar-width: 120px;
  position: absolute;
  // user-cover 高度減去頭像半徑
  top: calc(200px - (var(--avatar-width) / 2));
  left: 15px;

  border-radius: 50%;

  .mask {
    span:last-child {
      position: absolute;
      top: 60%;
      left: calc(var(--avatar-width) * 1);
      color: var(--info);

      width: max-content;
      border-radius: 4px;
      background-color: var(--input-background);
      padding: 2.5px 10px;
      font-size: 15px;
    }
  }

  img {
    width: var(--avatar-width);
    height: var(--avatar-width);
    border-radius: 50%;

    object-fit: cover;
  }
  .mask {
    border: 4px solid #fff;
    border-radius: 50%;
  }

  // Vue transition
  .hint-enter-active,
  .hint-leave-active,
  .hint-move {
    transition: opacity 0.35s ease-out, transform 0.35s ease-out;
  }

  .hint-enter {
    opacity: 20%;
    transform: translateX(-5%);
  }

  .hint-leave-to {
    opacity: 10%;
    transform: translateX(-2%);
  }
}

.form-area {
  margin: 80px 15px 50px;

  label {
    display: block;
    margin-bottom: 4px;
    font-size: 15px;
    line-height: 15px;
    color: var(--info);
  }

  input {
    height: 24px;
    flex-shrink: 1;
  }

  textarea {
    resize: none;
    flex-grow: 1;
  }

  input,
  textarea {
    border: none;
    width: 100%;
    background-color: transparent;

    font-size: 19px;
    line-height: 28px;
  }
}

.form-row {
  position: relative;

  padding: 5px 15px 6px;
  background-color: var(--input-background);
  border-radius: 4px;

  // 下底線
  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 2px;
    border-radius: 0px 0px 4px 4px;

    transition: background-color 0.35s ease-in-out;
    background-color: var(--info);
  }

  &.valid,
  &:hover,
  &:focus-within {
    &::after {
      background-color: var(--valid);
    }
  }

  // 錯誤提示
  &.invalid {
    &::after {
      background-color: var(--invalid);
    }
  }

  // 自我介紹欄
  &:nth-child(2) {
    margin-top: 42px;
    height: 150px;
  }

  // 提示列
  p {
    --hint-height: 22px;
    position: absolute;
    bottom: calc(0% - var(--hint-height));
  }

  p {
    right: 0%;
    color: var(--info);
    font-size: 15px;
    line-height: var(--hint-height);
  }

  .error-hint {
    left: 0%;
    color: var(--invalid);
  }
}

@media screen and (min-width: $breakpoint) {
  .modal {
    --modal-dialog-height: 657px;
  }
  .modal-dialog {
    max-width: 600px;
    min-height: var(--modal-dialog-height);
  }
}
</style>
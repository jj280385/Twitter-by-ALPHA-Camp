<template>
  <!-- Modal background-->
  <transition name="fade" mode="in-out">
    <div v-show="modal" @click.stop.prevent="modal = false" class="modal">
      <!-- Modal dialog -->
      <transition name="slide">
        <div
          v-show="modal"
          @click.stop.prevent="modal = true"
          class="modal-dialog d-flex"
        >
          <div class="modal-header">
            <button
              @click.stop.prevent="modal = false"
              class="close d-flex justify-content-center align-items-center"
            >
              <!-- icon shock SVG -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4139 11.9999L19.2069 6.20687C19.5969 5.81687 19.5969 5.18388 19.2069 4.79288C18.8169 4.40188 18.1839 4.40288 17.7929 4.79288L11.9999 10.5859L6.20687 4.79288C5.81687 4.40288 5.18388 4.40288 4.79288 4.79288C4.40188 5.18288 4.40288 5.81587 4.79288 6.20687L10.5859 11.9999L4.79288 17.7929C4.40288 18.1829 4.40288 18.8159 4.79288 19.2069C4.98788 19.4019 5.24287 19.4999 5.49987 19.4999C5.75687 19.4999 6.01187 19.4019 6.20687 19.2069L11.9999 13.4139L17.7929 19.2069C17.9879 19.4019 18.2429 19.4999 18.4999 19.4999C18.7569 19.4999 19.0119 19.4019 19.2069 19.2069C19.5969 18.8169 19.5969 18.1839 19.2069 17.7929L13.4139 11.9999Z"
                  fill="#FF6600"
                />
              </svg>
              <!-- SVG -->
            </button>
          </div>
          <hr />
          <!-- modal-body -->
          <div class="modal-body d-flex">
            <router-link to="/">
              <img
                src="../assets/image/John Doe.svg"
                class="avatar"
                alt="預設的頭像"
              />
            </router-link>

            <textarea
              class="modal-content"
              placeholder="有什麼新鮮事？"
            ></textarea>
          </div>

          <div class="modal-footer d-flex justify-content-end">
            <button type="button">推文</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      modal: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  // modal background
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: auto;

  padding: 0 10%;
  // for 不支援漸變屬性瀏覽器
  background-color: rgba(229, 229, 229, 0.9);
  background-color: var(--modal-background-around);

  background: radial-gradient(
    circle at 50% calc(#{$modal-height} + (300px / 2)),
    var(--modal-background-center),
    var(--modal-background-around)
  );
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.modal-dialog {
  // 供過渡動畫定位
  position: relative;

  margin: $modal-height auto 0;
  border-radius: 14px;
  min-width: 460px;
  min-height: 450px;

  flex-direction: column;
  font-weight: 500;

  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.285);

  background-color: var(--just-white);
  // css scan #26
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  backdrop-filter: blur(8px);

  .modal-header {
    padding: 15px;
  }

  /* The Close Button */
  button.close {
    cursor: pointer;
    transition: transform 0.35s ease-out;
    transform: scale(100%);

    padding: 0;
    svg {
      width: 24px;
    }

    &:hover,
    &:focus {
      svg > path {
        fill: var(--hover-color);
      }
    }
  }

  hr {
    height: 1px;
    background-color: var(--theme-line);
  }
}

.modal-body {
  flex-grow: 1;
  padding: 15px;

  img.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  textarea {
    flex-grow: 1;
    margin: 12px 0px 0px 10px;
    border: none;
    resize: none;

    color: var(--modal-textarea);
    font-size: 18px;
    line-height: 26.06px;

    &:focus {
      color: var(--main-text);
    }
  }
}

.modal-footer {
  padding: 0 15px 15px 15px;

  button {
    padding: 10px 15px;
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

// for modal dialog
.slide-enter,
.slide-leave-to {
  transform: translate(0, calc(-#{$modal-height} - 100%));
}

.slide-enter-to,
.slide-leave {
  transform: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.8, 0, 0.15, 1.4);
}

// for modal background
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.6s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.35s ease-in-out;
}

@media screen and (min-width: $breakpoint) {
  .modal-dialog {
    max-width: 600px;
    min-height: 300px;
  }
}
</style>

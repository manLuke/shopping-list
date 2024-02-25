import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faListUl,
  faTrash,
  faPlus,
  faPenToSquare,
  faXmark,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

library.add(faUser, faListUl, faTrash, faPlus, faPenToSquare, faXmark, faGripLinesVertical);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesome", FontAwesomeIcon);
});

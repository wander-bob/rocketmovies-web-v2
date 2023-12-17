import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
    .ScrollAreaRoot {
    padding-right: 1.6rem;
    height: 36rem;
    border-radius: 4px;
    overflow: hidden;
    --scrollbar-size: 1.6rem;
  }
  .ScrollAreaViewport {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding-inline: 2rem;
  }

  .ScrollAreaScrollbar {
    display: flex;
    /* ensures no selection */
    user-select: none;
    /* disable browser handling of all panning and zooming gestures on touch devices */
    touch-action: none;
    padding: 2px;
  }
  .ScrollAreaScrollbar[data-orientation='vertical'] {
    width: var(--scrollbar-size);
  }  
  .ScrollAreaThumb {
    flex: 1;
    background: ${theme.pink._500};
    border-radius: var(--scrollbar-size);
    position: relative;
  }
`;
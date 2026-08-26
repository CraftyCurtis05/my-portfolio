/* ========================================
   Shared Image Zoom
======================================== */

export default {
  data() {
    return {
      /*
       * Stores zoom information separately for each
       * image so zoom can follow the mouse position.
       */
      imageZoom: {}
    };
  },


  methods: {
    getImageZoom(imageId) {
      return (
        this.imageZoom[imageId]?.scale ||
        1
      );
    },


    getImageStyle(imageId) {
      const zoom =
        this.imageZoom[imageId] || {
          scale: 1,
          originX: 50,
          originY: 50
        };

      return {
        transform:
          `scale(${zoom.scale})`,

        transformOrigin:
          `${zoom.originX}% ${zoom.originY}%`
      };
    },


    setImageZoom(
      imageId,
      scale,
      originX = 50,
      originY = 50
    ) {
      this.imageZoom[imageId] = {
        scale,
        originX,
        originY
      };
    },


    getImageZoomPosition(event) {
      const element =
        event.currentTarget;

      const rect =
        element.getBoundingClientRect();

      const originX =
        (
          (event.clientX - rect.left) /
          rect.width
        ) * 100;

      const originY =
        (
          (event.clientY - rect.top) /
          rect.height
        ) * 100;

      return {
        originX:
          Math.max(
            0,
            Math.min(
              100,
              originX
            )
          ),

        originY:
          Math.max(
            0,
            Math.min(
              100,
              originY
            )
          )
      };
    },


    handleImageClick(
      event,
      imageId
    ) {
      const currentScale =
        this.getImageZoom(
          imageId
        );

      /*
       * Clicking while already zoomed resets
       * the image to its normal size.
       */
      if (currentScale > 1) {
        this.resetImageZoom(
          imageId
        );

        return;
      }

      const {
        originX,
        originY
      } =
        this.getImageZoomPosition(
          event
        );

      this.setImageZoom(
        imageId,
        2,
        originX,
        originY
      );
    },


    handleImageWheel(
      event,
      imageId
    ) {
      const current =
        this.imageZoom[imageId] || {
          scale: 1,
          originX: 50,
          originY: 50
        };

      const {
        originX,
        originY
      } =
        this.getImageZoomPosition(
          event
        );

      /*
       * Scroll upward to zoom in.
       * Scroll downward to zoom out.
       */
      const zoomAmount =
        event.deltaY < 0
          ? .25
          : -.25;

      const newScale =
        Math.max(
          1,
          Math.min(
            4,
            current.scale + zoomAmount
          )
        );

      this.setImageZoom(
        imageId,
        newScale,
        originX,
        originY
      );
    },


    resetImageZoom(imageId) {
      this.setImageZoom(
        imageId,
        1,
        50,
        50
      );
    },


    resetAllImageZoom() {
      this.imageZoom = {};
    }
  }
};
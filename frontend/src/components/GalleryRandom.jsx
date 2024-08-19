import React, { useEffect, useRef, useState } from 'react';
import '../style/Gallery.css';

const Gallery = () => {
    const galleryRef = useRef(null);
    const [scrolling, setScrolling] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePaths, setImagePaths] = useState([]);



    useEffect(() => {
        if (true) {
            const possibleIds = [450001, 530001, 530002, 510001, 510002, 360001, 360002, 350001, 350002, 350003, 330001, 330002, 330003, 520001, 520002, 520003, 210001, 130001, 370001, 610001]; // 示例数字数组
            possibleIds.sort(() => Math.random() - 0.5);
            // 假设最多有5张图片，你可以调整这个值
            const maxImages = 7;
            const newImagePaths = [];

            for (let cnt = 0; cnt < 4; cnt++) {
                for (let i = 1; i <= maxImages; i++) {
                    const path = `/GalleryPicture/${possibleIds[cnt]}-${i}.png`;

                    // 尝试加载图片，只有在加载成功时才将路径加入数组
                    const img = new Image();
                    img.src = path;
                    img.onload = () => {
                        newImagePaths.push(path);
                        setImagePaths([...newImagePaths]); // 更新状态以重新渲染组件
                    };
                    img.onerror = () => {
                        // 如果图片无法加载，则停止尝试更多图片
                        if (i === 1) {
                            setImagePaths(newImagePaths); // 更新状态以清空图片列表
                        }
                    };
                }
            }
        }
    }, []);

    const handleImageClick = (src) => {
        setScrolling(false); // 停止滚动
        setSelectedImage(src);
    };

    const closeOverlay = () => {
        setScrolling(true); // 恢复滚动
        setSelectedImage(null);
    };

    useEffect(() => {
        const gallery = galleryRef.current;
        const scrollSpeed = 1; // 调整滚动速度
        let requestId;

        const handleMouseEnter = () => setScrolling(false);
        const handleMouseLeave = () => setScrolling(true);

        gallery.addEventListener('mouseenter', handleMouseEnter);
        gallery.addEventListener('mouseleave', handleMouseLeave);

        const scrollGallery = () => {
            if (scrolling) {
                gallery.scrollTop += scrollSpeed;

                if (gallery.scrollTop >= gallery.scrollHeight - gallery.clientHeight) {
                    gallery.scrollTop = gallery.scrollTop - gallery.scrollHeight / 2;
                }
            }
            requestId = requestAnimationFrame(scrollGallery);
        };

        // 开始滚动
        requestId = requestAnimationFrame(scrollGallery);

        return () => {
            gallery.removeEventListener('mouseenter', handleMouseEnter);
            gallery.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(requestId);
        };
    }, [scrolling]);
    const newPaths = Array(200).fill(imagePaths).flat();
    return (
        <>
            <div className="gallery-container" ref={galleryRef}>
                <div className="gallery-content">
                    {newPaths.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="gallery-image"
                            onClick={() => handleImageClick(src)}
                        />
                    ))}
                </div>
            </div>

            {/* 放大图片的覆盖层 */}
            {selectedImage && (
                <div className="overlay visible" onClick={closeOverlay}>
                    <img src={selectedImage} alt="Enlarged" />
                </div>
            )}
        </>
    );
};

export default Gallery;

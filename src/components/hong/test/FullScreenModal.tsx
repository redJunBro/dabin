import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/hong/CarouselComponents";
import { Hair } from "@/utils/data";
import { Book, BookData } from "@/utils/data";

type FullScreenModalProps = {
  bookList: Book[] | null;
  onClose: () => void;
};

export default function FullScreenModal({
  bookList,
  onClose,
}: FullScreenModalProps) {
  if (!bookList || bookList.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subDescriptionVisible, setSubDescriptionVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [showHint, setShowHint] = useState(true); // 힌트 표시 여부
  const [animateDescription, setAnimateDescription] = useState(false); // 슬라이드 애니메이션 상태
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const observerOptions = {
      root: carouselElement,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          setAnimateDescription(false); // 애니메이션 비활성화
          setTimeout(() => {
            setCurrentIndex(index);
            setAnimateDescription(true); // 애니메이션 활성화
          }, 50); // 잠깐 지연 후 애니메이션 적용
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const items = carouselElement.querySelectorAll("[data-index]");

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTitleVisible(true);
    }, 100);
    setTimeout(() => {
      setSubDescriptionVisible(true);
    }, 300);
    setTimeout(() => {
      setImageVisible(true);
    }, 400);
    setTimeout(() => {
      setDescriptionVisible(true);
    }, 800);

    // 5초 동안 힌트 표시 후 숨기기
    const hintTimeout = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(hintTimeout);
  }, []);

  // 현재 인덱스에 해당하는 설명 정보를 가져옵니다.
  const currentHair = bookList[currentIndex];

  // description을 마침표 기준으로 나누고 줄바꿈 추가
  const formattedDescription = currentHair.descriptionKr
    .split(".")
    .filter((sentence) => sentence.trim() !== "")
    .map((sentence, index) => (
      <span key={index} className="block mb-2">
        {sentence.trim() + "."}
      </span>
    ));

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#f9f9f9] text-white overflow-y-auto flex flex-col items-center ${
        closing ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center bg-[#e2e2e2]">
        {/* 닫기 버튼 */}
        {/* <div className="font-kyobo text-lg">교보</div> */}
        {/* <div className="font-kopub text-lg">코펍</div>
        <div className="font-kyobo text-lg">교보</div>
        <div className="font-incheon text-lg">인천</div>
        <div className="font-Gabia text-lg">가비아</div>
        <div className="font-ylee text-lg">에일</div>
        <div className="font-JejuMyeongjo text-lg">제주명조</div> */}
        <button
          className="absolute top-4 left-4 text-xl text-gray-600 font-Gabia"
          onClick={handleClose}
        >
          &larr; Back
        </button>
        {/* 제목과 서브 설명 */}
        <div
          className={`w-full max-w-2xl text-center mt-12 px-3 ${
            titleVisible ? "animate-fade-in" : "hidden"
          }`}
        >
          <h2 className="text-xl font-semibold text-gray-700 font-JejuMyeongjo ">
            {currentHair.nameKr}
          </h2>
          <p className="text-xs text-gray-500 font-JejuMyeongjo ">
            {currentHair.nameEn}
          </p>
        </div>
        <div
          className={`w-full max-w-2xl text-center mt-2 px-3  ${
            subDescriptionVisible ? "animate-fade-in" : "hidden"
          }`}
        >
          {/* 서브 설명 */}
        </div>
        {/* 이미지 캐러셀 */}
        <div
          className={`w-full max-w-2xl p-2 relative ${
            imageVisible ? "animate-fade-in" : "hidden"
          }`}
          ref={carouselRef}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {hairList.map((hair, index) => (
                <CarouselItem
                  key={hair.id}
                  className="flex-[0_0_100%] px-2"
                  data-index={index}
                >
                  <div className="relative w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={hair.etc}
                      width={800}
                      height={600}
                      alt={hair.nameKr || "style image"}
                      className="object-cover rounded-lg w-full h-auto"
                    />
                    {/* 가격 */}
                    {/* <div className="absolute right-2 bottom-2 px-2 py-1 bg-gray-700/70 rounded-lg text-gray-100 text-xs">
                      ₩{hair.price.toLocaleString()}
                    </div> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* 설명 영역 */}
        <div
          className={`w-full max-w-2xl mt-4 px-4 pb-8 ${
            descriptionVisible
              ? animateDescription
                ? "animate-slide-fade-in"
                : ""
              : "hidden"
          }`}
        >
          {/* <div className="font-kyobo text-lg">교보</div> */}
          {/* <div className="font-kopub text-lg">코펍</div>
        <div className="font-kyobo text-lg">교보</div>
        <div className="font-incheon text-lg">인천</div>
        <div className="font-Gabia text-lg">가비아</div>
        <div className="font-ylee text-lg">에일</div>
        <div className="font-JejuMyeongjo text-lg">제주명조</div> */}

          <p
            className="text-gray-800 font-kopub"
            // className="text-gray-800"
            style={{
              letterSpacing: "-0.2px",
              marginBottom: "calc(18px * 2.0)",
              lineHeight: "1.9",
              fontWeight: 400,
            }}
          >
            {formattedDescription}
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-fade-in {
          0% {
            opacity: 0;
            transform: translateY(10%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-icon {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes hint-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 1.2s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-fade-in {
          animation: slide-fade-in 0.3s ease-out; /* 슬라이드 후 가볍게 표시하는 애니메이션 */
        }

        .animate-slide-icon {
          animation: slide-icon 1.5s ease-in-out infinite;
        }

        .animate-hint-blink {
          animation: hint-blink 1.5s step-start infinite;
        }
      `}</style>
    </div>
  );
}

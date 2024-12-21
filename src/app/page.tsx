"use client";
import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/hong/CarouselComponents";
import Image from "next/image";
import { Book, BookData } from "@/utils/data";
import FullScreenModal from "@/components/hong/test/FullScreenModal";
import MusicPlayer from "@/components/musicPlayer/MusicPlayer";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    const snowflakesArray = Array.from({ length: 30 }, (_, i) => i); // 갯수 조정
    setSnowflakes(snowflakesArray);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake}
          className={`snowflake ${flake % 2 === 0 ? "circle" : "star"}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 5}s`,
            fontSize: `${
              flake % 2 === 0 ? 5 + Math.random() * 5 : 10 + Math.random() * 10
            }px`,
          }}
        >
          {flake % 2 === 0 ? "●" : "❄️"}
        </div>
      ))}
      <style jsx>{`
        .snowflake {
          position: absolute;
          top: -10%;
          color: #fff;
          opacity: 0.8;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .circle {
          color: #ffffff;
        }
        .star {
          color: #cce7ff;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const BestSellerCarousel = ({
  title,
  bookList,
  onItemClick,
  alignTitleCenter = true,
  showBookName = false, // 스타일 이름 표시 여부
}: {
  title: string;
  bookList: Book[];
  onItemClick: (book: Book) => void;
  alignTitleCenter?: boolean;
  showBookName?: boolean;
}) => {
  return (
    <div className="mt-20 flex flex-col items-center w-full px-8 mb-10">
      <div className="text-lg font-bold text-black mb-2 font-ylee">{title}</div>
      <Carousel className="w-full">
        <CarouselContent>
          {bookList.map((book) => (
            <CarouselItem
              key={book.id}
              className="flex-[0_0_70%] px-2"
              onClick={() => onItemClick(book)}
            >
              <div className="w-full rounded-lg overflow-hidden shadow-md cursor-pointer relative">
                {/* 이미지 */}
                <Image
                  key={book.id} // 고유 key 값 추가
                  src={book.cover}
                  width={300}
                  height={200}
                  alt={book.title}
                  unoptimized={true}
                  className="object-cover rounded-lg w-full h-auto"
                />
                {/* 스타일 이름 (Best Style 및 얼굴형 조건 섹션에서만 표시) */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

// 재사용 가능한 캐러셀 컴포넌트 정의
const StyleCarousel = ({
  title,
  bookList,
  onItemClick,
  alignTitleCenter = true,
  showBookName = false,
}: {
  title: string;
  bookList: Book[];
  onItemClick: (book: Book) => void;
  alignTitleCenter?: boolean;
  showBookName?: boolean;
}) => {
  return (
    <div className="mt-20 flex flex-col items-center w-full px-10 mb-10">
      {/* 선 추가 */}
      <hr className="w-[100%] border-t border-gray-300 pt-20" />
      {/* <div className="font-kopub text-lg">코펍</div>
        <div className="font-kyobo text-lg">교보</div>
        <div className="font-incheon text-lg">인천</div>
        <div className="font-Gabia text-lg">가비아</div>
        <div className="font-ylee text-lg">에일</div>
        <div className="font-JejuMyeongjo text-lg">제주명조</div> */}
      <div className={"text-base mb-5 text-center text-gray-900 font-incheon"}>
        {title.split(/('.*?')/).map((part, index) =>
          part.startsWith("'") ? (
            <span key={index}>
              <br />
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </div>
      <div className="w-4/5 flex justify-center">
        {bookList.length > 0 && (
          <div
            className="w-full rounded-lg overflow-hidden cursor-pointer relativ"
            style={{
              // backgroundColor: "#e4e4e4", // 약간 어두운 흰색
              boxShadow:
                "0px 15px 35px rgba(0, 0, 0, 0.3), 0px 5px 15px rgba(0, 0, 0, 0.15)", // 깊고 감성적인 그림자
            }}
            onClick={() => onItemClick(bookList[0])}
          >
            {/* 단일 이미지 */}
            <Image
              key={bookList[0].id} // 고유 key 값 추가
              src={bookList[0].cover}
              width={300} // 300의 2/3
              height={200} // 200의 2/3
              alt={bookList[0].title}
              unoptimized={true}
              className="object-cover rounded-lg w-full h-auto"
            />
            {/* 스타일 이름 */}
            {showBookName && (
              <div className="absolute top-2 left-0 bg-black text-white text-xs font-normal px-3 py-1 shadow-md">
                {bookList[0].title}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    bookList: Book[] | null;
  }>({ isOpen: false, bookList: null });

  const [openAllSections, setOpenAllSections] = useState<boolean>(true); // 기본적으로 열림
  const [openFacialShape, setOpenFacialShape] = useState<{
    roundFace: boolean;
    longFace: boolean;
    shortForehead: boolean;
  }>({ roundFace: false, longFace: false, shortForehead: false });

  const [profileVisible, setProfileVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    setProfileVisible(true);
    setTimeout(() => {
      setSectionsVisible(true);
    }, 700); // 프로필 등장 후 전체 섹션이 나타나는 시간 지연
  }, []);

  // Best Style만 필터링한 데이터
  const bestStyles = useMemo(() => {
    // price가 높은 순으로 정렬
    const sortedStyles = BookData.sort((a, b) => b.price - a.price);

    // styleName 중복 제거
    const uniqueStyles = sortedStyles.reduce((acc, item) => {
      if (!acc.some((existing) => existing.title === item.title)) {
        acc.push(item); // styleName이 중복되지 않으면 추가
      }
      return acc;
    }, [] as Book[]); // 초기값은 빈 배열

    return uniqueStyles;
  }, []);

  // 스타일별 그룹화된 데이터 생성 (Map을 사용해 스타일별로 그룹화)
  const stylesByCategory = useMemo(() => {
    // id 순서대로 정렬
    const sortedById = [...BookData].sort((a, b) => a.id - b.id);

    return Array.from(
      sortedById.reduce((acc, item) => {
        if (!acc.has(item.title)) {
          acc.set(item.title, []);
        }
        acc.get(item.title)!.push(item);
        return acc;
      }, new Map<string, Book[]>())
    );
  }, []);
  const openModal = (book: Book) => {
    const filtered = BookData.filter((item) => item.title === book.title);
    setModalState({ isOpen: true, bookList: filtered });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, bookList: null });
  };

  const toggleFacialShapeSection = (section: keyof typeof openFacialShape) => {
    setOpenFacialShape((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div
      className="relative w-full max-w-[527px] mx-auto overflow-hidden pb-20 "
      style={{
        backgroundColor: "#e2e2e2", // 약간 어두운 흰색
      }}
    >
      <Snowfall />

      {/* 프로필 이미지 포함 영역 */}
      <div
        className={`relative w-full h-[200px] transition-all duration-1000 ease-in-out transform ${
          profileVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pb-2">
          <h2 className="text-lg font-semibold font-ylee">Crafted by Dabin</h2>
        </div>
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end pb-2">
          <div className="text-lg font-semibold font-ylee">
            짧은 글로 담아낸 작은 마음, 너에게 닿기를
          </div>
        </div>

        {/* <div className="font-kopub text-lg">코펍</div>
        <div className="font-kyobo text-lg">교보</div>
        <div className="font-incheon text-lg">인천</div>
        <div className="font-Gabia text-lg">가비아</div>
        <div className="font-ylee text-lg">에일</div>
        <div className="font-JejuMyeongjo text-lg">제주명조</div> */}
      </div>
      <div className="pt-5">
        <MusicPlayer />
      </div>

      {/* 전체 섹션을 감싼 애니메이션 적용 부분 */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          sectionsVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <BestSellerCarousel
          title="Best Seller"
          bookList={bestStyles}
          onItemClick={openModal}
          alignTitleCenter={true}
          showBookName={true}
        />
        <div
          className={`transition-max-height duration-700 ease-in-out overflow-hidden mt-10 ${
            openAllSections ? "max-h-[8000px]" : "max-h-0"
          }`}
        >
          {openAllSections &&
            stylesByCategory.map(([styleName, books]) => (
              <StyleCarousel
                key={styleName}
                title={styleName}
                bookList={books}
                onItemClick={openModal}
                alignTitleCenter={false}
                showBookName={false}
              />
            ))}
        </div>
      </div>

      {/* 모달 컴포넌트 */}

      {modalState.isOpen &&
        modalState.bookList &&
        modalState.bookList.length > 0 && (
          <FullScreenModal
            bookList={modalState.bookList}
            onClose={closeModal}
          />
        )}

      <style jsx>{`
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

        .snow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }
        .snowflake {
          position: absolute;
          top: 0;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

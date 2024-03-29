import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <Skeleton className="w-14 h-14" />
        <div>
          <Skeleton className="w-52 h-14" />
        </div>
      </div>
      <div className="px-4 lg:px-8">
        <Skeleton className="rounded-lg w-full h-14 p-4 px-3 md:px-6 grid grid-cols-12 gap-2" />
      </div>
    </>
  );
};

export default Loading;

import { siteContainerClass } from "@/lib/site-layout";

type SiteContainerProps = React.ComponentProps<"div">;

export function SiteContainer({ className = "", ...props }: SiteContainerProps) {
  return <div className={className ? `${siteContainerClass} ${className}` : siteContainerClass} {...props} />;
}

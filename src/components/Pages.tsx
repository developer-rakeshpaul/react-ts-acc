import { useState } from "react";
import { Page, PageStatus } from "../data";

interface FolderProps {
  pages: Page[];
}

export default function Pages({ pages }: FolderProps) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    open[id] = open[id] === undefined ? false : !open[id];
    setOpen({ ...open });
  };

  return (
    <ul>
      {pages.map((page) => (
        <li key={page.id} className="pl-4">
          {page.children && (
            <>
              <div className="flex space-x-1" onClick={() => toggle(page.id)}>
                <span>
                  {open[page.id] !== false
                    ? PageStatus.PageOpen
                    : PageStatus.PageClosed}
                </span>
                <label>{page.name}</label>
              </div>
              {open[page.id] !== false && page.children && (
                <Pages pages={page.children} />
              )}
            </>
          )}
          {!page.children && (
            <div className="flex space-x-1">
              <span>{PageStatus.Page}</span>
              <label>{page.name}</label>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

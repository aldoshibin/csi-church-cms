"use client";

import * as React from "react";
import {
  PLOT_MAP_SECTIONS, SECTION_A_PLOT_MAP_MOCK, PLOT_MAP_OVERVIEW_DONUT_MOCK, SECTION_SUMMARY_MOCK,
} from "@/lib/mock/vmCemeteryMockData";

function buildFallbackSectionMap(section) {
  const initial = section.slice(-1);
  return {
    section,
    columns: 15,
    rowGroups: [{ rows: [1, 2, 3] }, { pathway: true }, { rows: [4, 5, 6] }],
    highlights: {},
    initial,
  };
}

export function usePlotMap() {
  const [sectionSearch, setSectionSearch] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("Section A");

  const sections = React.useMemo(
    () => PLOT_MAP_SECTIONS.filter((s) => s.toLowerCase().includes(sectionSearch.toLowerCase())),
    [sectionSearch]
  );

  const sectionMap = React.useMemo(() => {
    if (selectedSection === "Section A") return { ...SECTION_A_PLOT_MAP_MOCK, initial: "A" };
    return buildFallbackSectionMap(selectedSection);
  }, [selectedSection]);

  return {
    sections, sectionSearch, setSectionSearch,
    selectedSection, setSelectedSection,
    sectionMap,
    donut: PLOT_MAP_OVERVIEW_DONUT_MOCK,
    sectionSummary: SECTION_SUMMARY_MOCK,
  };
}

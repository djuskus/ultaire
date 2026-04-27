// src/data/projects.ts
export interface Project {
  category: string;
  name:     string;
  desc:     string;
  tags:     string[];
}

export const projects: Project[] = [
  {
    category: 'app',
    name:     'excerpts',
    desc:     'A reading app that surfaces passages, quotes, and fragments that stay with you. Inspiration through the written word.',
    tags:     ['ios', 'swift'],
  },
  {
    category: 'app',
    name:     'ios prototype',
    desc:     'A native iOS prototype environment for fast UI experimentation — layouts, gestures, and flows without the full build cycle.',
    tags:     ['ios', 'prototype'],
  },
  {
    category: 'web',
    name:     'astro prototypes',
    desc:     'A library of Astro site templates and prototypes. Fast, composable, and ready to deploy.',
    tags:     ['astro', 'web'],
  },
  {
    category: 'infrastructure',
    name:     'delivery infra',
    desc:     'Build and deployment infrastructure for app delivery. Pipelines, environments, and release tooling owned end-to-end.',
    tags:     ['ci/cd', 'infra'],
  },
  {
    category: 'infrastructure',
    name:     'website pipelines',
    desc:     'Automated pipeline infrastructure for web properties — build, preview, publish, and rollback on every change.',
    tags:     ['pipelines', 'web'],
  },
  {
    category: 'productivity',
    name:     'organize',
    desc:     'Cross-platform personal organization. Tasks, notes, and structure that moves with you across every device.',
    tags:     ['cross-platform', 'productivity'],
  },
  {
    category: 'productivity',
    name:     'prompts',
    desc:     'A personal library of prompts, workflows, and AI interaction patterns. Built to refine and reuse over time.',
    tags:     ['ai', 'prompts'],
  },
  {
    category: 'productivity',
    name:     'dashboards',
    desc:     'Personal dashboards for tracking what matters. Configurable, private, and built to last.',
    tags:     ['data', 'visualization'],
  },
  {
    category: 'productivity',
    name:     'data capture',
    desc:     'Lightweight tools for capturing data, notes, and observations in the moment — structured for later use.',
    tags:     ['notes', 'data'],
  },
];

/**
 * YouTube transcript extractor.
 *
 * Usage: open a YouTube video page, then paste this whole script into the
 * browser DevTools console and press Enter. It will:
 *   1. Open the transcript panel (if not already open).
 *   2. Wait for the segments to render.
 *   3. Extract title, channel, URL, chapters and transcript lines.
 *   4. Trigger a .md file download.
 *   5. Return the Markdown text.
 * 
 * Note there are two variants of the UI with different element/class names.
 */
async function extractYouTubeTranscript() {
  function text(el) {
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // --- Open the transcript panel if needed ---------------------------------
  let segmentList = document.querySelector('.ytSectionListRendererContents, .ytd-transcript-segment-list-renderer');
  if (!segmentList) {
    document.querySelector("#expand").click();
    
    const openBtn = document.querySelector(
      'ytd-video-description-transcript-section-renderer button'
    );
    if (!openBtn) {
      console.error('Could not find the "Show transcript" button on this page.');
      return;
    }
    openBtn.click();

    // Wait (up to ~5s) for the panel to render.
    for (let i = 0; i < 25; i++) {
      await wait(200);
      segmentList = document.querySelector('.ytSectionListRendererContents, .ytd-transcript-segment-list-renderer');
      if (segmentList) break;
    }
  }

  if (!segmentList) {
    console.error('Transcript panel did not appear. Try clicking "Show transcript" manually and re-run.');
    return;
  }

  // --- Video metadata --------------------------------------------------------
  // NOTE: Metadata may become stale when clicking a video link from channel page, it needs a refresh
  const title = document.querySelector('meta[itemprop="name"]').content;
  const channel = document.querySelector('span[itemprop="author"] link[itemprop="name"]').getAttribute("content");
  const videoId = document.querySelector('meta[itemprop="identifier"]').content;
  const url = document.querySelector('link[itemprop="url"]').href;
  const date = document.querySelector('meta[itemprop="datePublished"]').content.substr(0, 10);
  const descriptionLines = document.querySelectorAll("#description #expanded .ytAttributedStringHost span");
  const description = [...descriptionLines].map(el => el.textContent).join("\n").replace(/\xa0/g, ' ').trim();

  // --- Walk transcript items (chapter headers + segments), in DOM order -----
  const items = segmentList.querySelectorAll(
    'h3.ytwTimelineChapterViewModelTitle, .ytwTimelineItemViewModelContentItems, ytd-transcript-segment-renderer'
  );

  const lines = [];
  items.forEach((item) => {
    const className = item.className;

    if (className === 'ytwTimelineChapterViewModelTitle') {
      const headerText = text(item);
      // Localized text looks like "Chapter 1: Intro".
      // Pull out the chapter number and the title, discard the localized word.
      const m = headerText.match(/(\d+): (.*)$/);
      if (m) {
        const num = m[1];
        const rest = m[2].trim();
        lines.push(`\n### Chapter ${num}${rest ? ': ' + rest : ''}\n`);
      } else {
        lines.push(`\n### ${headerText}\n`);
      }
      return;
    }

    // .ytwTimelineItemViewModelContentItems or .ytd-transcript-segment-renderer
    const timestamp = text(item.querySelector('.ytwTranscriptSegmentViewModelTimestamp, .segment-timestamp'));
    const line = text(item.querySelector('.ytAttributedStringHost, .segment-text'));
    if (timestamp || line) {
      lines.push(`${timestamp} ${line}`.trim());
    }
  });

  if (lines.length === 0) {
    console.error('No transcript segments found. The panel may not have finished loading — try again.');
    return;
  }

  const header = `Source: [${title}](${url}) by ${channel}`;
  const output = `${header}\nDate: ${date}\n\n## Description\n\n${description}\n\n## Transcript\n${lines.join('\n')}\n`;

  console.log(output);

  // --- Trigger a file download as well ------------------------------------
  const safeName = `${channel} - ${date} - ${title}`.replace(': ', ' - ').replace(/[—]/g, '-').replace(/[\\*?"“”<>|/]/g, '').slice(0, 150);
  const blob = new Blob([output], { type: 'text/markdown;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${safeName}.md`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);

  return output;
}
transcript = extractYouTubeTranscript();

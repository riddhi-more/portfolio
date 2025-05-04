/**
 * Utility function to trigger a download of a file
 * @param url URL of the file to download
 * @param filename Name to save the file as
 */
export function downloadFile(url: string, filename: string): void {
  // Create a link element
  const link = document.createElement("a")

  // Set the href to the file URL
  link.href = url

  // Set the download attribute with the desired filename
  link.download = filename

  // Append the link to the body
  document.body.appendChild(link)

  // Trigger the download
  link.click()

  // Clean up
  document.body.removeChild(link)
}

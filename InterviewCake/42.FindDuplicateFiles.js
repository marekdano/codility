/**
 * You left your computer unlocked and your friend decided to troll you by copying
 * a lot of your files to random spots all over your file system.
 *
 * Even worse, she saved the duplicate files with random, embarrassing names
 * ("this_is_like_a_digital_wedgie.txt" was clever, I'll give her that).
 *
 * Write a function that returns a list of all the duplicate files.
 * We'll check them by hand before actually deleting them, since programmatically deleting files is really scary.
 * To help us confirm that two files are actually duplicates, return a list of arrays or tuples where:
 *
 * 1. the first item is the duplicate file
 * 2. the second item is the original file
 *
 *  For example:
 *
 *  [['/tmp/parker_is_dumb.mpg', '/home/parker/secret_puppy_dance.mpg'], ['/home/trololol.mov', '/etc/apache2/httpd.conf']]
 *
 * You can assume each file was only duplicated once.
 */

// TODO: write test cases

const fs = require("fs");
const crypto = require("crypto");

function findDuplicateFiles(startingDirectory) {
  var filesSeenAlready = {};
  // to hold directories and files as we go through them
  var stack = [startingDirectory];
  // to hold our output arrays
  var duplicates = [];

  while (stack.length) {
    var currentPath = stack.pop();
    var currentFile = fs.statSync(currentPath);

    // if it's a directory,
    // put the contents in our stack
    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach(function(path) {
        stack.push(currentPath + "/" + path);
      });

      // if it's a file
    } else {
      // get its hash
      var fileHash = sampleHashFile(currentPath);

      // get its last edited time
      var currentLastEditedTime = currentFile.mtime;

      // if we've seen it before
      if (filesSeenAlready.hasOwnProperty(fileHash)) {
        var existingFile = filesSeenAlready[fileHash];

        if (currentLastEditedTime > existingFile.lastEditedTime) {
          // current file is the dupe!
          duplicates.push([currentPath, existingFile.path]);
        } else {
          // old file is the dupe!
          duplicates.push([existingFile.path, currentPath]);

          // but also update the object to have the new file's info
          filesSeenAlready[fileHash] = {
            lastEditedTime: currentLastEditedTime,
            path: currentPath
          };
        }

        // if it's a new file, throw it in filesSeenAlready
        // and record its path and last edited time,
        // so we can tell later if it's a dupe
      } else {
        filesSeenAlready[fileHash] = {
          lastEditedTime: currentLastEditedTime,
          path: currentPath
        };
      }
    }
  }

  return duplicates;
}

function sampleHashFile(path) {
  const file = fs.statSync(path);

  const sampleSize = 4000;
  const totalBytes = file.size;

  const hash = crypto.createHash("sha512");

  // if the file is too short to take 3 samples, hash the entire file
  if (totalBytes < sampleSize * 3) {
    hash.update(fs.readFileSync(path));
  } else {
    const numBytesBetweenSamples = (totalBytes - sampleSize * 3) / 2;

    var buffer = new Buffer(sampleSize * 3);

    // read first, middle, and last bytes
    for (var offsetMultiplier = 0; offsetMultiplier <= 2; offsetMultiplier++) {
      var fd = fs.openSync(path, "r");

      var offset = offsetMultiplier * sampleSize;
      var position = offsetMultiplier * (sampleSize + numBytesBetweenSamples);

      fs.readSync(fd, buffer, offset, sampleSize, position);
    }

    hash.update(buffer);
  }

  return hash.digest();
}

module.exports = findDuplicateFiles;

// Python solution

// import os

// def find_duplicate_files(starting_directory):
//     files_seen_already = {}
//     stack = [starting_directory]

//     # We'll track tuples of (duplicate_file, original_file)
//     duplicates = []

//     while len(stack) > 0:
//         current_path = stack.pop()

//         # If it's a directory,
//         # put the contents in our stack
//         if os.path.isdir(current_path):
//             for path in os.listdir(current_path):
//                 full_path = os.path.join(current_path, path)
//                 stack.append(full_path)

//         # If it's a file
//         else:
//             # Get its contents
//             with open(current_path) as file:
//                 file_contents = file.read()

//             # Get its last edited time
//             current_last_edited_time = os.path.getmtime(current_path)

//             # If we've seen it before
//             if file_contents in files_seen_already:
//                 existing_last_edited_time, existing_path = files_seen_already[file_contents]
//                 if current_last_edited_time > existing_last_edited_time:
//                     # Current file is the dupe!
//                     duplicates.append((current_path, existing_path))
//                 else:
//                     # Old file is the dupe!
//                     # So delete it
//                     duplicates.append((existing_path, current_path))
//                     # But also update files_seen_already to have
//                     # the new file's info
//                     files_seen_already[file_contents] = (current_last_edited_time, current_path)

//             # If it's a new file, throw it in files_seen_already
//             # and record the path and the last edited time,
//             # so we can delete it later if it's a dupe
//             else:
//                 files_seen_already[file_contents] = (current_last_edited_time, current_path)

//     return duplicates

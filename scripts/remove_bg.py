from PIL import Image
import sys

def remove_black_background(input_path, output_path, threshold=50):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # item is (r, g, b, a)
        # Check if the pixel is close to black
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # It's black-ish, make it transparent
            # We can use a gradient for smoother edges, but simple transparency is safer for now
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print("Successfully removed background")

if __name__ == "__main__":
    remove_black_background(
        "public/hyrdev_globe.png", 
        "public/hyrdev_globe_transparent.png",
        threshold=30 # Adjust if needed
    )

<?php

use App\Models\Image;

function createAndSaveImage($path, $image): Image {
    $imgPath = $image->store($path);
    $pos = strripos($imgPath, '/');
    $img = new Image();
    $img['img_name'] = substr($imgPath, $pos + 1, strlen($imgPath));
    return $img;
}

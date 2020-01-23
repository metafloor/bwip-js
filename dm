
##cat tests/barcode.ps - > dm.ps <<@EOF
##0 0 moveto
##((01)02900001333399212v<t!6SWsA/KE^02991012A^0299296T7YI2b9zPMt8y9mU+m7wSUbpe6+7rMdHyo5MMd5h08V1skespIRxR1NUp3MjLP1qDnJikugL76w1Yktr+lHw==) () /gs1datamatrix /uk.co.terryburton.bwipp findresource exec
##@EOF


gs -q -dSAFER -dBATCH -dNOPAUSE dm.ps

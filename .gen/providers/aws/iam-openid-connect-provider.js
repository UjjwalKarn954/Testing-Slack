"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.IamOpenidConnectProvider = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider}
*/
var IamOpenidConnectProvider = /** @class */ (function (_super) {
    __extends(IamOpenidConnectProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamOpenidConnectProviderConfig
    */
    function IamOpenidConnectProvider(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_openid_connect_provider',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clientIdList = config.clientIdList;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._thumbprintList = config.thumbprintList;
        _this._url = config.url;
        return _this;
    }
    Object.defineProperty(IamOpenidConnectProvider.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "clientIdList", {
        get: function () {
            return this.getListAttribute('client_id_list');
        },
        set: function (value) {
            this._clientIdList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "clientIdListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientIdList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    IamOpenidConnectProvider.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(IamOpenidConnectProvider.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    IamOpenidConnectProvider.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(IamOpenidConnectProvider.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "thumbprintList", {
        get: function () {
            return this.getListAttribute('thumbprint_list');
        },
        set: function (value) {
            this._thumbprintList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "thumbprintListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thumbprintList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamOpenidConnectProvider.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamOpenidConnectProvider.prototype.synthesizeAttributes = function () {
        return {
            client_id_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientIdList),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            thumbprint_list: cdktf.listMapper(cdktf.stringToTerraform)(this._thumbprintList),
            url: cdktf.stringToTerraform(this._url)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamOpenidConnectProvider.tfResourceType = "aws_iam_openid_connect_provider";
    return IamOpenidConnectProvider;
}(cdktf.TerraformResource));
exports.IamOpenidConnectProvider = IamOpenidConnectProvider;

"use strict";
// https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html
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
exports.ImagebuilderComponent = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html aws_imagebuilder_component}
*/
var ImagebuilderComponent = /** @class */ (function (_super) {
    __extends(ImagebuilderComponent, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html aws_imagebuilder_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderComponentConfig
    */
    function ImagebuilderComponent(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_component',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._changeDescription = config.changeDescription;
        _this._data = config.data;
        _this._description = config.description;
        _this._kmsKeyId = config.kmsKeyId;
        _this._name = config.name;
        _this._platform = config.platform;
        _this._supportedOsVersions = config.supportedOsVersions;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._uri = config.uri;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(ImagebuilderComponent.prototype, "arn", {
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
    Object.defineProperty(ImagebuilderComponent.prototype, "changeDescription", {
        get: function () {
            return this.getStringAttribute('change_description');
        },
        set: function (value) {
            this._changeDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetChangeDescription = function () {
        this._changeDescription = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "changeDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._changeDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "data", {
        get: function () {
            return this.getStringAttribute('data');
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetData = function () {
        this._data = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "dataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "supportedOsVersions", {
        get: function () {
            return this.getListAttribute('supported_os_versions');
        },
        set: function (value) {
            this._supportedOsVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetSupportedOsVersions = function () {
        this._supportedOsVersions = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "supportedOsVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportedOsVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "uri", {
        get: function () {
            return this.getStringAttribute('uri');
        },
        set: function (value) {
            this._uri = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderComponent.prototype.resetUri = function () {
        this._uri = undefined;
    };
    Object.defineProperty(ImagebuilderComponent.prototype, "uriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderComponent.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImagebuilderComponent.prototype.synthesizeAttributes = function () {
        return {
            change_description: cdktf.stringToTerraform(this._changeDescription),
            data: cdktf.stringToTerraform(this._data),
            description: cdktf.stringToTerraform(this._description),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            supported_os_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedOsVersions),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            uri: cdktf.stringToTerraform(this._uri),
            version: cdktf.stringToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ImagebuilderComponent.tfResourceType = "aws_imagebuilder_component";
    return ImagebuilderComponent;
}(cdktf.TerraformResource));
exports.ImagebuilderComponent = ImagebuilderComponent;
